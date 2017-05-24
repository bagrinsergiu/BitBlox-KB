========
MailChimp Integration
========


MailChimp is an email marketing platform that delivers millions of emails a day. You can use the integration to send your subscribers product updates, event invitations, announcements or editorial content. Use MailChimp’s reports to improve your campaigns and learn more about your subscribers.
		
.. contents::
    :local:
    :backlinks: top

	
Connect a form to MailChimp
------

1.  Open your landing page and go to the **Form**. 
2.  On the form button, hove over **Edit** and click on **Integration List**.

	.. class:: screenshot

		|mailchimp-open-integration|
		

3. Select **Mailchimp** from the list.

	.. class:: screenshot

		|mailchimp-choose-mailchimp|


4. In the new box that appears, click **New Account**.

	.. class:: screenshot

		|mailchimp-connect-new-account|

		
5. Log into your MailChimp account. If this window doesn't appear, make sure your browser is not blocking popups from BitBlox. 

 
    .. class:: screenshot
	
	    |mailchimp-login-in|

6. Select your account and click **Continue** 

	.. class:: screenshot
	
	    |mailchimp-continue-account|
		
		
7. Select the MailChimp list you want to send to, click **Continue** 


	.. class:: screenshot
	
	    |mailchimp-continue-lists|
		
		
8. Edit your form's fields, click **Continue**

	.. class:: screenshot
	
	    |mailchimp-continue-fields|
		

11. Click **Add Record** 

	.. class:: screenshot

		
		|namecom-enter-cname-record2|

		
	
12. In your BitBlox account, click **Edit Page** on your landing page. 

     .. class:: screenshot

		|bitblox-click-edit-page|

		

13. Open the **Sidebar** and click the **Settings** icon


    .. class:: screenshot

		|bitblox-click-settings|

		
14. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

15. In the **Domain Name** box enter the full domain name you want to link (ex: ``mylandingpage.com``) and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-connect-domain|
    
16. After you've claimed your domain, a new panel will be opened with the records from your provider domain account (it can take upt o 48 hours for changes to take effect)

	
    .. class:: screenshot

		|bitblox-dns-settings|
	
17. If your records are entered correctly, the **Current Data** will be green 

    .. class:: screenshot

		|bitblox-click-refresh|

    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.

		

Set up your subdomain with Name.com
------

1. `Log in to your Name.com account <https://name.com>`__ 
2. In the **Domains** section, click **my domains**

	.. class:: screenshot

		|namecom-click-my-domains|
		

3. In the **Domain** tab, click your domain 

	.. class:: screenshot

		|cname-open-subdomain|


4. In the **Details** section, click **DNS Records** 

	.. class:: screenshot

		|namecom-open-subdomain|

		
5. In the **Type** column, use the drop-down menu to select **A** Record
6. In the **Host** text box, enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your sudomain, enter ``promo``)  
7. In the **Answer** text box, enter BitBlox's IP address ``162.243.77.151`` 
8. Click **Add Record**

	.. class:: screenshot

		|namecom-enter-a-record-subdomain|	

		
9. In your BitBlox account, click **Edit Page** on your landing page. 

    .. class:: screenshot

		|bitblox-click-edit-page|

10. Open the **Sidebar** and click the **Settings** icon

    .. class:: screenshot

		|bitblox-click-settings|		
		
11. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

12. In the **Domain Name** box enter the full domain name you want to link (ex: ``promo.mydomain.com``), and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-subdomain-click-connect-domain|
    
13. After you've claimed your domain, a new panel will be opened with the records from your provider domain account (it can take upt o 48 hours for changes to take effect)

	
    .. class:: screenshot

		|bitblox-subdomain-dns-settings|
	
14. If your records are entered correctly, the **Current Data** will be green

    .. class:: screenshot

		|bitblox-subdomain-refresh|

.. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.
		

Getting more help
------

For more help with settings in your Name.com account, contact their `support team <https://www.name.com/support>`__ 

.. |nmailchimp-open-integration| image:: _images/mailchimp-open-integration.png
.. |mailchimp-choose-mailchimp| image:: _images/mailchimp-choose-mailchimp.png
.. |mailchimp-connect-new-account| image:: _images/mailchimp-connect-new-account.png
.. |mailchimp-login-in| image:: _images/mailchimp-login-in.png
.. |mailchimp-continue-account| image:: _images/mailchimp-continue-account.png
.. |mailchimp-continue-lists| image:: _images/mailchimp-continue-lists.png
.. |mailchimp-continue-fields| image:: _images/mailchimp-continue-fields.png
.. |mailchimp-close| image:: _images/mailchimp-close.png


.. |bitblox-click-3-rd-party-domain| image:: _images/bitblox-click-3-rd-party-domain.png
.. |bitblox-click-edit-page| image:: _images/bitblox-click-edit-page.png
.. |bitblox-connect-domain| image:: _images/bitblox-connect-domain.png
.. |bitblox-dns-settings| image:: _images/bitblox-dns-settings.png
.. |bitblox-click-refresh| image:: _images/bitblox-click-refresh.png
.. |bitblox-click-settings| image:: _images/bitblox-click-settings.jpg
.. |bitblox-subdomain-click-connect-domain| image:: _images/bitblox-subdomain-click-connect-domain.png
.. |bitblox-subdomain-dns-settings| image:: _images/bitblox-subdomain-dns-settings.png
.. |bitblox-subdomain-refresh| image:: _images/bitblox-subdomain-refresh.png