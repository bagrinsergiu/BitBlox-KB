========
Set up your domain with Crazy Domains
========


If you purchased a domain from Crazy Domains, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your Crazy Domains account to tell the domain/subdomain where to point.

		
.. contents::
    :local:
    :backlinks: top

	
Set up your domain with Crazy Domains 
------

1. `Log in to your Crazy Domains account <https://www.crazydomains.com/>`__ 
2.  In the **Main Menu**, click **Domains**

    .. class:: screenshot

		|crazydomains-click-domains|
		

3. In the main page, scroll down to **DNS Settings** section and click **Add Record** 

    .. class:: screenshot

		|crazydomain-add-record|


4. Select **A Record** from the drop-down menu, then click **Add** 

    .. class:: screenshot

		|crazydomain-add-a-record|

5. Leave the **Sub Domain** box blank
6. In the **Alias For** box, enter	BitBlox's IP address ``162.243.77.151``
7. Click **Update**

    .. class:: screenshot
	
	    |crazydomain-save-a-record|

8. In the **DNS Setting** , select **Add Record** 

    .. class:: screenshot

		|crazydomain-add-cname-record|

9. Select **CNAME Record** from the drop-down menu, then click **Add** 

    .. class:: screenshot

		|crazydomain-add-cname|

		
10. In the **Sub Domain** box, enter **www**
11. In the **Alias For** box, enter your domain name (ex: ``mylandingpage.com``)
12. Click **Update**

    .. class:: screenshot

		|crazydomain-save-cname-record|


		
13. Claim your custom domain in BitBlox [LINK]

    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.

		

Set up your subdomain with Crazy Domains
------

1. `Log in to your Crazy Domains account <https://www.crazydomains.com/>`__ 
2. In the **Main Menu**, click **Domains**:

    .. class:: screenshot

		|crazydomains-click-domains|
		

3. In the main page, scroll down to **DNS Settings** section and click **Add Record** 

    .. class:: screenshot

		|crazydomain-add-record|


4. Select **A Record** from the drop-down menu, then click **Add** 

    .. class:: screenshot

		|crazydomain-add-a-record|


5. In the **Sub Domain** box, enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your sudomain, enter ``promo``)
6. In the **Alias For** box, enter	BitBlox's IP address ``162.243.77.151``
7. Click **Update**
		
    .. class:: screenshot

		|crazydomain-save-subdomain|	

		
8. Claim your custom domain in BitBlox [LINK]

    .. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.
		

Getting more help
------

For more help with settings in your Crazy Domain account, contact their `support team <https://www.crazydomains.com/help/>`__ . 

.. |crazydomains-click-domains| image:: _images/crazydomains-click-domains.png
.. |crazydomain-add-record| image:: _images/crazydomain-add-record.png
.. |crazydomain-add-a-record| image:: _images/crazydomain-add-a-record.png
.. |crazydomain-save-a-record| image:: _images/crazydomain-save-a-record.png
.. |crazydomain-add-cname-record| image:: _images/crazydomain-add-cname-record.png
.. |crazydomain-add-cname| image:: _images/crazydomain-add-cname.png
.. |crazydomain-save-cname-record| image:: _images/crazydomain-save-cname-record.png
.. |crazydomains-click-domains| image:: _images/crazydomains-click-domains.png
.. |crazydomain-add-record| image:: _images/crazydomain-add-record.png
.. |crazydomain-add-a-record| image:: _images/crazydomain-add-a-record.png
.. |crazydomain-save-subdomain| image:: _images/crazydomain-save-subdomain.png