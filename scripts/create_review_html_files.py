"""
This script creates a liquid html file in assets/html/reviews for
each markdown review file.  This is used to enable the randomize
feature.

REVIEWS_DIR and LIQUID_OUTPUT_DIR are variables which much be set.
"""
import os
from pathlib import Path

def get_review_unique_name(review_file: str):
    """Extract and return the 'unique_name' from yaml frontmatter of
    review file."""
    with open(review_file, 'r') as f:
        for line in f:
            if line.startswith('unique_name'):
                return line.split(': ')[1].strip('\n')

def get_liquid_html(review_unique_name: str) -> None:
    """Insert the review_name string into the liquid template (update
    template here)."""
    return """\
---
layout:
---

{% for review in site.reviews %}
    {% if review.unique_name == "REPLACE_ME" %}
        {% include review_block.html review=review %}
    {% endif %}
{% endfor %}
""".replace("REPLACE_ME", review_unique_name)

def main(reviews_dir: str, liquid_output_dir: str):
    reviews_dir = Path(reviews_dir)
    liquid_output_dir = Path(liquid_output_dir)
    review_files = [reviews_dir / review for review in os.listdir(reviews_dir)]

    for review_file in review_files:
        review_unique_name = get_review_unique_name(review_file)
        liquid_filename = review_file.stem + '.html'
        liquid = get_liquid_html(review_unique_name)

        with open(liquid_output_dir / liquid_filename, 'w') as f:
            f.write(liquid)

if __name__ == '__main__':
    LIQUID_OUTPUT_DIR = "../assets/html/reviews"
    REVIEWS_DIR = "../_reviews"

    main(REVIEWS_DIR, LIQUID_OUTPUT_DIR)
