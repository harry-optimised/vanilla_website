import requests
from datetime import datetime
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import logging

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

CRAWLED_URLS = set()
SITEMAP_URLS = []

def crawl_website(url, domain=None):
    logger.info(f'Crawling URL: {url}')
    CRAWLED_URLS.add(url)

    if domain is None:
        domain = urlparse(url).netloc

    try:
        response = requests.get(url)
        if response.status_code == 404:
            logger.warning(f'404 warning for URL: {url}')
            return

        last_modified = response.headers.get('Last-Modified', datetime.now().strftime('%Y-%m-%d'))
        SITEMAP_URLS.append((url, last_modified))

        soup = BeautifulSoup(response.text, 'html.parser')
        links_to_follow = []

        # Collect article links
        for article in soup.find_all('article-card'):

            link = article.get('url')
            link = urljoin(url, link)
            links_to_follow.append(link)

        # Collect all links
        for href in soup.find_all('a'):
            link = href.get('href')
            link = urljoin(url, link)

            if urlparse(link).netloc == domain:
                links_to_follow.append(link)

        # Check images do not have broken links
        for img in soup.find_all('img'):
            img_url = img.get('src')
            img_url = urljoin(url, img_url)

            try:
                img_response = requests.get(img_url)
                if img_response.status_code != 200:
                    logger.warning(f'Image broken link: {img_url}')
            except requests.exceptions.RequestException as e:
                logger.warning(f'Image request failed for URL: {img_url}, with error {e}')   

        for link in links_to_follow:

            link_domain = urlparse(link).netloc

            if link_domain == domain and link not in CRAWLED_URLS:
                crawl_website(link, domain)


    except requests.exceptions.RequestException as e:
        logger.warning(f'Request failed for URL: {url}, with error {e}')


def write_sitemap():
    with open('sitemap.xml', 'w') as file:
        file.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        file.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
        for loc, lastmod in SITEMAP_URLS:
            file.write(f'    <url>\n')
            file.write(f'        <loc>{loc}</loc>\n')
            file.write(f'        <lastmod>{lastmod}</lastmod>\n')
            file.write(f'    </url>\n')
        file.write('</urlset>')
    logger.info('Sitemap written to sitemap.xml')


if __name__ == '__main__':
    crawl_website('https://www.harrysprojects.com')
    write_sitemap()
