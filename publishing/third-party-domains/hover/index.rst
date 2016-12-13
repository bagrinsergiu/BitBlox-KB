========
Set up your domain with Hover
========


If you purchased a domain from Hover, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your Hover account to tell the domain/subdomain where to point.


.. contents::
    :local:
    :backlinks: top


Set up your domain with Hover
------

1. `Log in to your Hover account <https://www.hover.com/signin>`__
2. From the Domains page, click the **DNS** tab 

	.. class:: screenshot

		|hover-click-dns|


3. In the **@** column, click **edit DNS**

	.. class:: screenshot

		|hover-click-edit-dns|


4. In **IP Address** text box, enter BitBlox's IP address ``162.243.77.151`` 
5. Click the **SAVE** button

	.. class:: screenshot

		|hover-click-save|


6. In the **DNS** tab, click **ADD NEW**

	.. class:: screenshot
  
        |hover-click-add-new-cname|

		
		
7. In the **Hostname** text box, enter ``www``
8. In the **Record Type** text box, enter **CNAME**
9. In the **Target Host** text box, enter your domain name (ex: ``mylandingpage.com``)
10. Click the **SAVE** button

	.. class:: screenshot

		|hover-click-save-cname|



11. In your BitBlox account, click **Edit Page** on your landing page

     .. class:: screenshot

		|bitblox-click-edit-page|

		

12. Open the **Sidebar** and click the **Settings** icon


    .. class:: screenshot

		|bitblox-click-settings|

		
13. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

14. In the **Domain Name** box enter the full domain name you want to link (ex: ``mylandingpage.com``) and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-connect-domain|
    
15. After you've claimed your domain, a new panel will be opened with the records from your provider domain account (it can take upt o 48 hours for changes to take effect)

	
    .. class:: screenshot

		|bitblox-dns-settings|
	
16. If your records are entered correctly, the **Current Data** will be green 

    .. class:: screenshot

		|bitblox-click-refresh|


    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider



Set up your subdomain with Hover
------

1. `Log in to your Hover account <https://www.hover.com/signin>`__
2.  From the Domains page, click the **DNS** tab

	.. class:: screenshot

		|hover-click-dns-subdomain|


3. In the **DNS** tab, click **ADD NEW**

	.. class:: screenshot

		|hover-click-add-new-subdomain|

		
				
4. In the **Hostname** text box, enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your subdomain, enter ``promo``)
5. In the **Record Type** text box, enter **A**
6. In the **IP Address** text box, enter BitBlox's IP address ``162.243.77.151``
7. Click the **SAVE** button


	.. class:: screenshot

		|hover-click-save-subdomain|


8. In your BitBlox account, click **Edit Page** on your landing page

     .. class:: screenshot

		|bitblox-click-edit-page|

		
		
9.  Open the **Sidebar** and click the **Settings** icon


    .. class:: screenshot

		|bitblox-click-settings|
		
10. Click **Settings** tab and then click **3rd Party Domain** tab


    .. class:: screenshot

		|bitblox-click-3-rd-party-domain|

11. In the **Domain Name** box enter the full domain name you want to link (ex: ``promo.my-landing-page.com``), and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-subdomain-click-connect-domain|
    
12. After you've claimed your domain, a new panel will be opened with the records from your provider domain account (it can take upt o 48 hours for changes to take effect)

	
    .. class:: screenshot

		|bitblox-subdomain-dns-settings|
	
13. If your records are entered correctly, the **Current Data** will be green

    .. class:: screenshot

		|bitblox-subdomain-refresh|

.. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider


Getting more help
------

For more help with settings in your Hover account, contact their `support team <https://help.hover.com/hc/en-us>`__ .


.. |hover-click-dns| image:: _images/hover-click-dns.png
.. |hover-click-edit-dns| image:: _images/hover-click-edit-dns.png
.. |hover-click-save| image:: _images/hover-click-save.png
.. |hover-click-add-new-cname| image:: _images/hover-click-add-new-cname.png
.. |hover-click-save-cname| image:: _images/hover-click-save-cname.png
.. |hover-click-dns-subdomain| image:: _images/hover-click-dns-subdomain.png
.. |hover-click-add-new-subdomain| image:: _images/hover-click-add-new-subdomain.png
.. |hover-click-save-subdomain| image:: _images/hover-click-save-subdomain.png

.. |bitblox-click-3-rd-party-domain| image:: _images/bitblox-click-3-rd-party-domain.png
.. |bitblox-subdomain-click-connect-domain| image:: _images/bitblox-subdomain-click-connect-domain.png
.. |bitblox-subdomain-dns-settings| image:: _images/bitblox-subdomain-dns-settings.png
.. |bitblox-click-edit-page| image:: _images/bitblox-click-edit-page.png
.. |bitblox-subdomain-refresh| image:: _images/bitblox-subdomain-refresh.png
.. |bitblox-connect-domain| image:: _images/bitblox-connect-domain.png
.. |bitblox-dns-settings| image:: _images/bitblox-dns-settings.png
.. |bitblox-click-refresh| image:: _images/bitblox-click-refresh.png
.. |bitblox-click-settings| image:: _images/bitblox-click-settings.jpg