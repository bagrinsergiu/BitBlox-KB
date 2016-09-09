========
Set up your domain with DreamHost
========




If you purchased a domain from DreamHost, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your DreamHost account to tell the domain/subdomain where to point.

		
.. contents::
    :local:
    :backlinks: top

	
Set up your domain with DreamHost
------

1. `Log in to your DreamHost account <https://panel.dreamhost.com/>`__ 
2. In the **Main Menu**, click **Domains**

    .. class:: screenshot

		|dreamhost-open-domains|
		

3. Click **Manage Domains**

    .. class:: screenshot

		|dreamhost-click-manage-domains|


4. Under your domain, click **DNS**

    .. class:: screenshot

		|dreamhost-click-dns|

		
5. In the **Name** box, leave the white blank 
6. In the **Type** drop down menu, select **A** Record
7. In the **Value** box, enter BitBlox's IP address ``162.243.77.151``  
8. Click **Add Record Now!**  

    .. class:: screenshot

		|dreamhost-enter-ip|

9. In the **Name** box, enter **www**
10. In the **Type** drop down menu, select **CNAME** Record
11. In the **Value** box, enter your domain name (ex: ``mylandingpage.com``)

    .. class:: screenshot

		|dreamhost-save-cname-record|
	
12. Claim your custom domain in BitBlox [LINK]

    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.

		

Set up your subdomain with DreamHost
------

1. `Log in to your DreamHost account <https://panel.dreamhost.com/>`__  
2. In the **Main Menu**, click **Domains**

    .. class:: screenshot

		|dreamhost-open-domains|
		

3. Click **Manage Domains**

    .. class:: screenshot

		|dreamhost-click-manage-domains|



4. Under your domain, click **DNS**

    .. class:: screenshot

		|dreamhost-click-dns-subdomain|

5. In the **Name** box, enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your sudomain, enter ``promo``)
6. In the **Type** drop down menu, select **A** Record
7. In the **Value** text box, enter BitBlox's IP address ``162.243.77.151`` 
8. Click  **Add Record Now!**  

    .. class:: screenshot

		|dreamhost-add-ip-subdomain|	

		
9. Claim your custom domain in BitBlox [LINK]

    .. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.
		

Getting more help
------

For more help with settings in your DreamHost account, contact their `support team <https://help.dreamhost.com/hc/en-us>`__ . 


.. |dreamhost-open-domains| image:: _images/dreamhost-open-domains.png
.. |dreamhost-click-manage-domains| image:: _images/dreamhost-click-manage-domains.png
.. |dreamhost-click-dns| image:: _images/dreamhost-click-dns.png
.. |dreamhost-enter-ip| image:: _images/dreamhost-enter-ip.png
.. |dreamhost-save-cname-record| image:: _images/dreamhost-save-cname-record.png
.. |dreamhost-click-dns-subdomain| image:: _images/dreamhost-click-dns-subdomain.png
.. |dreamhost-add-ip-subdomain| image:: _images/dreamhost-add-ip-subdomain.png

