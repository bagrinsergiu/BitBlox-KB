========
Set up your domain with Namecheap
========


If you purchased a domain from Namecheap, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your Namecheap account to tell the domain/subdomain where to point.


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

10. In the **Value** text box, enter your domain name (ex: ``my-landing-page.com``)
11. Click the **Save Changes** icon

	.. class:: screenshot

		|namecheap-cname-record-save|

12. Next to the **URL Redirect Record** click on the trashcan icon		
		
		
    .. class:: screenshot	
		
		|namecheap-remove-url-records|
		
13. In your BitBlox account, click **Edit Page** on your landing page. 

     .. class:: screenshot

		|bitblox-click-edit-page|

		
		
14. Open the **Page Panel** and click the **Settings** icon

     .. class:: screenshot

		|bitblox-click-settings|


15. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

16. In the **Domain Name** box enter the full domain name you want to link, and then click **Connect Domain** button


    .. class:: screenshot
 
		|bitblox-connect-domain|
    
17. After you connect your domain, a new panel will open with the records you need to enter in your provider account so your domain connects to BitBlox.

	
    .. class:: screenshot

		|bitblox-dns-settings|
	
18. After changing the records in your domain provider, return to BitBlox **Domain List** and click **Refresh** button. If your records are enetered correctly, the **Current Data** will be in green color.

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
8. Click the **Save Changes** icon:

	.. class:: screenshot

		|namecheap-a-record-save-subdomain|

9. Next to the **URL Redirect Record** click on the trashcan icon		
		
		
    .. class:: screenshot	
		
		|namecheap-remove-url-records-subdomain|
			
		
10. In your BitBlox account, click **Edit Page** on your landing page. 

    .. class:: screenshot

		|bitblox-click-edit-page|

11. Open the **Page Panel** and click the **Settings** icon

    .. class:: screenshot

		|bitblox-click-settings|		
		
12. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

13. In the **Domain Name** box enter the full domain name you want to link, and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-subdomain-click-connect-domain|
    
14. After you connect your domain, a new panel will open with the records you need to enter in your provider account so your domain connects to BitBlox.

	
    .. class:: screenshot

		|bitblox-subdomain-dns-settings|
	
15. After changing the records in your domain provider, return to BitBlox **Domain List** and click **Refresh** button. If your records are enetered correctly, the **Current Data** will be in green color.

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