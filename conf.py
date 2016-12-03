# -*- coding: utf-8 -*-
import sys, os
from sphinx.highlighting import lexers
from pygments.lexers.web import PhpLexer
from datetime import date

source_suffix = '.rst'
master_doc = 'index'
project = 'Intro to BitBlox'
copyright = `date.today().year` + ' BitBlox | Easiest Way To Build Landing Pages '
#version = ''
#release = ''
#exclude_patterns = []

html_favicon = 'favicon.png'
html_theme_path = ["_themes"]
html_theme = 'bitblox'

man_pages = [
    ('index', 1)
]

lexers['php'] = PhpLexer(startinline=True)
lexers['php-annotations'] = PhpLexer(startinline=True)
primary_domain = 'php'
