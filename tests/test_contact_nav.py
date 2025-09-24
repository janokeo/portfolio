import pytest
from playwright.sync_api import Page, expect

def test_contact_link_scrolls_to_form(page: Page):
    # Navigate to the page
    page.goto("file://./index.html")

    # Click the "Contact" link in the navigation
    page.click('nav a[href="#contact"]')

    # The contact form should be visible in the viewport
    contact_form = page.locator(".contact-form")
    expect(contact_form).to_be_in_viewport()