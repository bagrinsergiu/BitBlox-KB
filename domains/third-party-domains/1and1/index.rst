=====================
Set up your domain with 1and1.com
=====================



If you purchased a domain from 1and1, you can use it for your BitBlox Landing Page by following a process called domain/ subdomain mapping. In this process, you'll change a few settings in your 1and1 account to tell the domain/ subdomain where to point.

		
.. contents::
    :local:
    :backlinks: top

	
Set up your domain with 1and1
------

1. `Log in to your 1and1 account <https://www.1and1.com/login?__lf=Static/>`__ 
2. In **Your domain** section, click **Manage Domain**

	.. class:: screenshot

		|1and1-click-manage-domain|
		

3. In the **Domains** page, click **Click DNS Settings**

	.. class:: screenshot

		|1and1-click-manage-dns-settings|


4. Scroll down to **A/AAAA** and **CNAME Records**, click **Other IP address (aslo valid for Managed Cloud Hosting)**

	.. class:: screenshot

		|1and1-click-other-ip|

5. In the box to the right of **IPv4 Address**, enter BitBlox's IP ``162.243.77.151``. Leave any other boxes blank	


    .. class:: screenshot

		|1and1-edit-a-record|

6. Scroll down and click **Save** 

    .. class:: screenshot

		|1and1-save-a-record|


7. In the **Domains** page, click **Create subdomain**
	
	.. class:: screenshot

		|1and1-click-create-subdomain|
	
	
8. In the **Create Subdomain** box, enter **www**
9. Click **Create Subdomain**
	
    .. class:: screenshot

		|1and1-create-subdomain|
	
		
10. Claim your custom domain in BitBlox [LINK]

    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.

		

Set up your subdomain with Namecheap
------

1. `Log in to your Namecheap account <https://namecheap.com/myaccount/login.aspx>`__ 
2. Click **Manage** next to your domain name:

	.. class:: screenshot

		|namecheap-manage-dns-subdomain|
		

3. On the domain **Details** page, click **Advanced DNS**

	.. class:: screenshot

		|namecheap-dns-panel-subdomain|


4. Click **Add new record** 

	.. class:: screenshot

		|namecheap-add-new-record|

		
5. In the **Type** column, use the drop-down menu to select **A Record** 
6. Enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your sudomain, enter ``promo``) in the **Host** text box, and BitBlox's IP ``162.243.77.151`` in the **Value** text box
7. Click the **Save Changes** icon: 

	.. class:: screenshot

		|namecheap-a-record-save-subdomain|	

		
8. Claim your custom domain in BitBlox [LINK]

.. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.
		

Getting more help
------

For more help with settings in your Namecheap account, contact their `support team <https://www.namecheap.com/support.aspx>`__ . 

.. |1and1-click-manage-domain| image:: _images/1and1-click-manage-domain.png
.. |1and1-click-manage-dns-settings| image:: _images/1and1-click-manage-dns-settings.png
.. |1and1-click-other-ip| image:: _images/1and1-click-other-ip.png
.. |1and1-edit-a-record| image:: _images/1and1-edit-a-record.png
.. |1and1-save-a-record| image:: _images/1and1-save-a-record.png
.. |1and1-click-create-subdomain| images:: _images/1and1-click-create-subdomain.png