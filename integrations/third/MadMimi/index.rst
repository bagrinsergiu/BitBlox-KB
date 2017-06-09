========
Set up your domain with Namecheap
========


If you purchased a domain from Namecheap, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your Namecheap account to tell the domain/subdomain where to point.

========
Zapier Integration
========





	
.. contents::
    :local:
    :backlinks: top

	
Requirements / On the Zapier Site
------


The only thing you will need on the Zapier part is your API Key value:


1.  Log into your Zapier account:

 	.. class:: screenshot

		|zapier-log-in|
		
2.  Click on the **Make a Zap** button

	.. class:: screenshot

		|zapier-make-a-zap|
		

3. Click **Catch Hook** and then click **Save+Continue** button

	.. class:: screenshot

		|zapier-click-webhook|


4. Click **Set Up Hook** tab. You will see the webhook URL.

		

Connect a form to Zapier
------

1.  Open your landing page and go to the **Form Block**  
2.  On the form button click on **Integration** icon

	.. class:: screenshot

		|zapier-open-integration|
		

3. Select **Zapier** integration from the list

	.. class:: screenshot

		|zapier-choose-zapier|


4. Click **Connect New Account**

	.. class:: screenshot

		|zapier-connect-new-account|

		
5. Enter the URL Link then click **Yes, Continue** button 

    .. class:: screenshot
	
	    |zapier-enter-url|

6. Select your account and click **Continue** 

	.. class:: screenshot
	
	    |zapier-continue-account|
		
		
7. Select the title and click **Continue** 


	.. class:: screenshot
	
	    |zapier-select-title|
		
		
8. Match your form's fields and click **Continue**

	.. class:: screenshot
	
	    |zapier-continue-fields|
		
		
9. Click **Close** 	
		
		
		
Connect Multiplies forms to Zapier
------

You can connect different accounts and lists from Zapier to your landing page under different forms.


1.  Open your landing page and go to the **Form Block**  
2.  On the form button click on **Integration** icon

	.. class:: screenshot

		|zapier-open-zapier|
		

3. Select **Zapier** integration from the list

	.. class:: screenshot

		|zapier-choose-zapier|


4. Click **Connect New Account**

	.. class:: screenshot

		|zapier-connect-new-account|

		
5. Enter the URL Link then click **Yes, Continue** button 

    .. class:: screenshot
	
	    |zapier-enter-url|

6. Select your account and click **Continue** 

	.. class:: screenshot
	
	    |zapier-continue-account|
		
		
7. Select the title and click **Continue** 


	.. class:: screenshot
	
	    |zapier-select-title|
		
		
8. Match your form's fields and click **Continue**

	.. class:: screenshot
	
	    |zapier-continue-fields|
		
			
9. Click **Close** 	

		

Disconnect the Zapier integration
------

1. Open your landing page and go to the **Form Block** 
2. On the form button click on **Integration** icon

	.. class:: screenshot

		|zapier-open-integration|
		

3. Select **Zapier** from the list. 

	.. class:: screenshot

		|zapier-choose-autopilot|

4. Click on the delete **x** sign to the right of your account


	.. class:: screenshot

		|zapier-remove-account|

5. Your account has been removed and you have been disconnected from Zapier	
		
	.. class:: screenshot

		|zapier-account-removed|	
		

Getting more help
------
If you have more questions or requests, `submit a ticket <https://www.bitblox.me/support/>`__ to BitBlox Customer Department


.. |zapier-log-in| image:: _images/zapier-log-in.jpg
.. |zapier-make-a-zap| image:: _images/zapier-make-a-zap.jpg
.. |zapier-click-webhook| image:: _images/zapier-click-webhook.jpg


.. |zapier-open-integration| image:: _images/zapier-open-integration.jpg
.. |zapier-choose-zapier| image:: _images/zapier-choose-autopilot.jpg
.. |zapier-connect-new-account| image:: _images/zapier-connect-new-account.jpg
.. |zapier-enter-url| image:: _images/zapier-enter-url.jpg
.. |zapier-login-in| image:: _images/zapier-login-in.jpg
.. |zapier-continue-account| image:: _images/zapier-continue-account.jpg
.. |zapier-continue-lists| image:: _images/zapier-continue-lists.jpg
.. |zapier-continue-fields| image:: _images/zapier-continue-fields.jpg


.. |zapier-open-integration| image:: _images/zapier-open-integration.jpg
.. |zapier-choose-autopilot| image:: _images/zapier-choose-autopilot.jpg
.. |zapier-choose-new-account| image:: _images/zapier-choose-autopilot.jpg
.. |zapier-login-in| image:: _images/zapier-login-in.jpg
.. |zapier-continue-account2| image:: _images/zapier-continue-account2.jpg	
.. |zapier-continue-lists2| image:: _images/zapier-continue-lists2.jpg
.. |zapier-continue-fields| image:: _images/zapier-continue-fields.jpg


.. |zapier-remove-account| image:: _images/zapier-remove-account.jpg
.. |zapier-account-removed| image:: _images/zapier-account-removed.jpg	


.. contents::
    :local:
    :backlinks: top


Set up your domain with Namecheap
------

1. `Log in to your Namecheap account <https://namecheap.com/myaccount/login.aspx>`__
2. Click **Domain list** tab, and then click **Manage** next to your domain name

	.. class:: screenshot

		|namecheap-manage-dns|


3. On the domain **Details** page, click **Advanced DNS**

	.. class:: screenshot

		|namecheap-dns-panel|


4. Click **Add new record**

	.. class:: screenshot

		|namecheap-add-new-record|


5. In the **Type** column, use the drop-down menu to select **A Record**
6. In the **Host** text box, enter ``@``
7. In the **Value** text box, enter BitBlox's IP address ``162.243.77.151``  
8. Click the **Save Changes** icon:

	.. class:: screenshot

		|namecheap-a-record-save|

9. In the **Type** column, click **CNAME Record**:

	.. class:: screenshot

		|namecheap-edit-cname|

10. In the **Value** text box, enter your domain name (ex: ``mylandingpage.com``)
11. Click the **Save Changes** icon

	.. class:: screenshot

		|namecheap-cname-record-save|

12. Next to the **URL Redirect Record** click on the trashcan icon		
		
		
    .. class:: screenshot	
		
		|namecheap-remove-url-records|
		
13. In your BitBlox account, click **Edit Page** on your landing page 

     .. class:: screenshot

		|bitblox-click-edit-page|

		
		
14. Open the **Sidebar** and click the **Settings** icon

     .. class:: screenshot

		|bitblox-click-settings|


15. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

16. In the **Domain Name** box enter the full domain name you want to link (ex: ``mylandingpage.com``) and then click **Connect Domain** button


    .. class:: screenshot
 
		|bitblox-connect-domain|
    
17. After you've claimed your domain, a new panel will be opened with the records from your provider domain account (it can take upt o 48 hours for changes to take effect)

	
    .. class:: screenshot

		|bitblox-dns-settings|
	
18. If your records are entered correctly, the **Current Data** will be green

    .. class:: screenshot

		|bitblox-click-refresh|



    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.



Set up your subdomain with Namecheap
------

1. `Log in to your Namecheap account <https://namecheap.com/myaccount/login.aspx>`__
2. Click **Domain list** tab and then click **Manage** next to your domain name

	.. class:: screenshot

		|namecheap-manage-dns-subdomain|


3. On the domain **Details** page, click **Advanced DNS**

	.. class:: screenshot

		|namecheap-dns-panel-subdomain|


4. Click **Add new record**

	.. class:: screenshot

		|namecheap-add-new-record-subdomain|


5. In the **Type** column, use the drop-down menu to select **A Record**
6. In the **Host** text box, enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your subdomain, enter ``promo``)
7. In the **Value** text box , enter BitBlox's IP address ``162.243.77.151``
8. Click the **Save Changes** icon

	.. class:: screenshot

		|namecheap-a-record-save-subdomain|

9. Next to the **URL Redirect Record** click on the trashcan icon		
		
		
    .. class:: screenshot	
		
		|namecheap-remove-url-records-subdomain|
			
		
10. In your BitBlox account, click **Edit Page** on your landing page. 

    .. class:: screenshot

		|bitblox-click-edit-page|

11. Open the **Sidebar** and click the **Settings** icon

    .. class:: screenshot

		|bitblox-click-settings|		
		
12. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

13. In the **Domain Name** box enter the full domain name you want to link (ex: ``promo.mydomain.com``), and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-subdomain-click-connect-domain|
    
14. After you've claimed your domain, a new panel will be opened with the records from your provider domain account (it can take upt o 48 hours for changes to take effect)

	
    .. class:: screenshot

		|bitblox-subdomain-dns-settings|
	
15. If your records are entered correctly, the **Current Data** will be green

    .. class:: screenshot

		|bitblox-subdomain-refresh|

.. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.


Getting more help
------

For more help with settings in your Namecheap account, contact their `support team <https://www.namecheap.com/support.aspx>`__ .


.. |edit-landing-page| image:: _images/edit-landing-page.png
.. |pagepanel| image:: _images/pagepanel.jpg
.. |open3rdpartdomain| image:: _images/open3rdpartdomain.png
.. |enter-domain| image:: _images/enter-domain.png

.. |namecheap-manage-dns| image:: _images/namecheap-manage-dns.png
.. |namecheap-manage-dns-subdomain| image:: _images/namecheap-manage-dns-subdomain.png
.. |namecheap-dns-panel| image:: _images/namecheap-dns-panel.png
.. |namecheap-dns-panel-subdomain| image:: _images/namecheap-dns-panel-subdomain.png
.. |namecheap-add-new-record| image:: _images/namecheap-add-new-record.png
.. |namecheap-add-new-record-subdomain| image:: _images/namecheap-add-new-record-subdomain.png
.. |namecheap-a-record-save| image:: _images/namecheap-a-record-save.png
.. |namecheap-a-record-save-subdomain| image:: _images/namecheap-a-record-save-subdomain.png
.. |namecheap-edit-cname| image:: _images/namecheap-edit-cname.png
.. |namecheap-cname-record-save| image:: _images/namecheap-cname-record-save.png
.. |namecheap-remove-url-records| image:: _images/namecheap-remove-url-records.png
.. |namecheap-remove-url-records-subdomain| image:: _images/namecheap-remove-url-records-subdomain.png

.. |bitblox-click-3-rd-party-domain| image:: _images/bitblox-click-3-rd-party-domain.png
.. |bitblox-subdomain-click-connect-domain| image:: _images/bitblox-subdomain-click-connect-domain.png
.. |bitblox-subdomain-dns-settings| image:: _images/bitblox-subdomain-dns-settings.png
.. |bitblox-click-edit-page| image:: _images/bitblox-click-edit-page.png
.. |bitblox-subdomain-refresh| image:: _images/bitblox-subdomain-refresh.png
.. |bitblox-connect-domain| image:: _images/bitblox-connect-domain.png
.. |bitblox-dns-settings| image:: _images/bitblox-dns-settings.png
.. |bitblox-click-refresh| image:: _images/bitblox-click-refresh.png
.. |bitblox-click-settings| image:: _images/bitblox-click-settings.jpg