========
Set up your domain with GoDaddy
========


If you purchased a domain from GoDaddy, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your GoDaddy account to tell the domain/subdomain where to point.

		
.. contents::
    :local:
    :backlinks: top

	
Set up your domain with GoDaddy 
------

1. `Log in to your GoDaddy account <https://sso.godaddy.com/?realm=idp&app=mya&path=?ci=>`__ 
2.  In the **Domains** section, click **Manage**

	.. class:: screenshot

		|godaddy-click-manage|
		

3. Select the domain you would like to connect and click the **Settings** icon, and select **Manage DNS**

	.. class:: screenshot

		|godaddy-manage-dns|


4. In the **Record** section, click the **Edit Record** icon for the **A** record  

	.. class:: screenshot

		|godaddy-edit-a-record|

		
5. In the **Points to** text box, enter BitBlox's IP address ``162.243.77.151``
6. Click **Save** 
 
    .. class:: screenshot
	
	    |godaddy-enter-ip|

7. In the row of the **www** host, click the **Edit Record** icon 

	.. class:: screenshot

		|godaddy-edit-cname|

		
8. In the **Points to** text box, enter your domain name (ex: ``my-landing-page.com``) 
9. Click **Save**

	.. class:: screenshot

		|godaddy-enter-www|


		
10. Claim your custom domain in BitBlox [LINK]

    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.

		

Set up your subdomain with GoDaddy
------

1. `Log in to your GoDaddy account <https://sso.godaddy.com/?realm=idp&app=mya&path=?ci=>`__ 
2. In the **Domains** section, click **Manage**

	.. class:: screenshot

		|godaddy-click-manage|
		

3. Select the domain you would like to connect and click the **Settings** icon, and select **Manage DNS**  

	.. class:: screenshot

		|godaddy-manage-dns-subdomain|


4. Click the **ADD** icon

	.. class:: screenshot

		|godaddy-add-new-record-subdomain|

		
5. In the **Type** column, use the drop-down menu to select **A Record** 
6. In the **Host** text box, enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your sudomain, enter ``promo``)   
7. In the **Points To** text box, enter BitBlox's IP address ``162.243.77.151``
8. Click **Save**

    .. class:: screenshot

		|godaddy-enter-subdomain|	

		
9. Claim your custom domain in BitBlox [LINK]

    .. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.
		

Getting more help
------

For more help with settings in your GoDaddy account, contact their `support team <https://uk.godaddy.com/help>`__ . 

.. |godaddy-click-manage| image:: _images/godaddy-click-manage.png 
.. |godaddy-manage-dns| image:: _images/godaddy-manage-dns.png
.. |godaddy-edit-a-record| image:: _images/godaddy-edit-a-record.png
.. |godaddy-enter-ip| image:: _images/godaddy-enter-ip.png
.. |godaddy-edit-cname| image:: _images/godaddy-edit-cname.png
.. |godaddy-enter-www| image:: _images/godaddy-enter-www.png
.. |godaddy-manage-dns-subdomain| image:: _images/godaddy-manage-dns-subdomain.png 
.. |godaddy-add-new-record-subdomain| image:: _images/godaddy-add-new-record-subdomain.png
.. |godaddy-enter-subdomain| image:: _images/godaddy-enter-subdomain.png