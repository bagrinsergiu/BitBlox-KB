========
Set up your domain with Name.com
========


If you purchased a domain from Name.com, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your Name.com account to tell the domain/subdomain where to point.

		
.. contents::
    :local:
    :backlinks: top

	
Set up your domain with Name.com 
------

1. `Log in to your Name.com account <https://name.com>`__ 
2.  In the **Domains** section, click **my domains**

	.. class:: screenshot

		|namecom-click-my-domains|
		

3. In the **Domain** tab, click your domain

	.. class:: screenshot

		|namecom-open-landingpage-domain|


4. In the **Details** section, click **DNS Records** 

	.. class:: screenshot

		|namecom-select-dns|

		
5. In the **Type** column, use the drop-down menu to select **A** Record 
6. In the **Answer** text box, enter BitBlox's IP address ``162.243.77.151`` 
7. Click **Add Record** 
 
    .. class:: screenshot
	
	    |namecom-enter-ip|

8. In the **Type** column, use the drop-down menu to select **CNAME** Record
9. In the **Host** text box, enter **www** 
10. In the **Answer** text box, enter your domain name (ex: ``mylandingpage.com``) 
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

15. In the **Domain Name** box enter the full domain name you want to link, and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-connect-domain|
    
16. After you connect your domain, a new panel will open with the records you need to enter in your provider account so your domain connects to BitBlox.

	
    .. class:: screenshot

		|bitblox-dns-settings|
	
17. After changing the records in your domain provider, return to BitBlox **Domain List** and click **Refresh** button. If your records are enetered correctly, the **Current Data** will be in green color.

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

12. In the **Domain Name** box enter the full domain name you want to link, and then click **Connect Domain** button


    .. class:: screenshot

		|bitblox-subdomain-click-connect-domain|
    
13. After you connect your domain, a new panel will open with the records you need to enter in your provider account so your domain connects to BitBlox.

	
    .. class:: screenshot

		|bitblox-subdomain-dns-settings|
	
14. After changing the records in your domain provider, return to BitBlox **Domain List** and click **Refresh** button. If your records are enetered correctly, the **Current Data** will be in green color.

    .. class:: screenshot

		|bitblox-subdomain-refresh|

.. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.
		

Getting more help
------

For more help with settings in your Name.com account, contact their `support team <https://www.name.com/support>`__ 

.. |namecom-click-my-domains| image:: _images/namecom-click-my-domains.png
.. |namecom-open-landingpage-domain| image:: _images/namecom-open-landingpage-domain.png
.. |namecom-select-dns| image:: _images/namecom-select-dns.png
.. |namecom-enter-ip| image:: _images/namecom-enter-ip.png
.. |namecom-enter-cname-record2| image:: _images/namecom-enter-cname-record2.png
.. |cname-open-subdomain| image:: _images/cname-open-subdomain.png
.. |namecom-open-subdomain| image:: _images/namecom-open-subdomain.png
.. |namecom-enter-a-record-subdomain| image:: _images/namecom-enter-a-record-subdomain.png


.. |bitblox-click-3-rd-party-domain| image:: _images/bitblox-click-3-rd-party-domain.png
.. |bitblox-click-edit-page| image:: _images/bitblox-click-edit-page.png
.. |bitblox-connect-domain| image:: _images/bitblox-connect-domain.png
.. |bitblox-dns-settings| image:: _images/bitblox-dns-settings.png
.. |bitblox-click-refresh| image:: _images/bitblox-click-refresh.png
.. |bitblox-click-settings| image:: _images/bitblox-click-settings.jpg
.. |bitblox-subdomain-click-connect-domain| image:: _images/bitblox-subdomain-click-connect-domain.png
.. |bitblox-subdomain-dns-settings| image:: _images/bitblox-subdomain-dns-settings.png
.. |bitblox-subdomain-refresh| image:: _images/bitblox-subdomain-refresh.png