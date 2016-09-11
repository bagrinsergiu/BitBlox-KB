========
Set up your domain with Register.com
========


If you purchased a domain from Register.com, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you'll change a few settings in your Register.com account to tell the domain/subdomain where to point.

		
.. contents::
    :local:
    :backlinks: top

	
Set up your domain with Register.com 
------

1. `Log in to your Register.com account <https://www.register.com/myaccount/productdisplay.rcmx/>`__ 
2.  Click **Account Manager**, then click **Domains** 

    .. class:: screenshot

		|registercom-select-domain|
		
3. From the drop-down menu, select **Manage**

    .. class:: screenshot

		|registercom-select-manage|
		
4. Click **Manage** for the domain your want to use

    .. class:: screenshot

		|registercom-select-manage-domain|


5. Scroll down to **Advanced Technical Settings**, click **Edit IP Address Records** 

	.. class:: screenshot

		|registercom-edit-a-record|

6. In the first row, add ``@`` to the left of your domain
7. In the right of **points to** , enter BitBlox's IP address ``162.243.77.151`` 
8. Click **Continue**

    .. class:: screenshot
	
	    |registercom-enter-a-record|
		
9. Click **Continue**
   
    .. class:: screenshot
	
	    |registercom-enter-continue|
		

10. Scroll down to **Advanced Technical Settings**, click **Edit Domain Aliases Records**

    .. class:: screenshot
	
	    |registercom-select-cname|

11. In the box to left of your domain name, enter **www** 
12. In the box to right of **points to**, enter you domain name (ex: ``mylandingpage.com``) 
13. Click **Continue**

    .. class:: screenshot

		|registercom-enter-cname-record|

14. Click **Continue**

	.. class:: screenshot

		|registercom-click-continue-cnam|

		
	
15. Claim your custom domain in BitBlox [LINK]

    .. note::

		After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.

		

Set up your subdomain with Register.com
------

1. `Log in to your Register.com account <https://www.register.com/myaccount/productdisplay.rcmx/>`__ 
2.  Click **Account Manager**, then click **Domains** 

	.. class:: screenshot

		|registercom-select-domain|
		

3. From the drop-down menu, select **Manage**

    .. class:: screenshot

		|registercom-select-manage|


4. Click **Manage** for the domain your want to use

    .. class:: screenshot

		|registercom-select-subdomain|


5. Scroll down to **Advanced Technical Settings**. click **Edit IP Address Records**

    .. class:: screenshot

		|registercom-edit-a-record|

6. In the first row,  enter your subdomain prefix (if you picked ``promo.mydomain.com`` as your sudomain, enter ``promo``)
7. In the right of **points to** box, add BitBlox's IP address ``162.243.77.151`` 
8. Click **Continue**
	
	.. class:: screenshot

		|registercom-enter-a-subdomain|	


9. Click **Continue**
	
	.. class:: screenshot

		|registercom-click-continue-subdomain|		
		
		
10. Claim your custom domain in BitBlox [LINK]

    .. note::

	After you've claimed your domain, it can take up to 48 hours for changes to take effect. If it takes more than 48 hours, you should contact your custom domain provider.
		

Getting more help
------

For more help with settings in your Register.com account, contact their `support team <https://www.register.com/customersupport/index.rcmx>`__ . 


.. |registercom-select-domain| image:: _images/registercom-select-domain.png
.. |registercom-select-manage| image:: _images/registercom-select-manage.png
.. |registercom-select-manage-domain| image:: _images/registercom-select-manage-domain.png
.. |registercom-edit-a-record| image:: _images/registercom-edit-a-record.png
.. |registercom-enter-a-record| image:: _images/registercom-enter-a-record.png
.. |registercom-enter-continue| image:: _images/registercom-enter-continue.png
.. |registercom-select-cname| image:: _images/registercom-select-cname.png
.. |registercom-edit-cname-record| image:: _images/registercom-edit-cname-record.png
.. |registercom-enter-cname-record| image:: _images/registercom-enter-cname-record.png
.. |registercom-click-continue-cnam| image:: _images/registercom-click-continue-cnam.png
.. |registercom-select-subdomain| image:: _images/registercom-select-subdomain.png
.. |registercom-enter-a-subdomain|	image:: _images/registercom-enter-a-subdomain.png
.. |registercom-click-continue-subdomain| image:: _images/registercom-click-continue-subdomain.png