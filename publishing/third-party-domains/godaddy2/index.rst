========
Set up your domain with GoDaddy
========


If you purchased a domain from GoDaddy, you can use it for your BitBlox Landing Page by following a process called domain/subdomain mapping. In this process, you’ll change a few settings in your GoDaddy account to tell the subdomain where to point.


.. contents::
    :local:
    :backlinks: top

	

1. `Log in to your BitBlox account <https://www.bitblox.me/welcome//>`__ 	
2. In your dashboard, click **Edit Page** on your landing page

     .. class:: screenshot

		|edit-my-landing-page-bitblox|

3. Open the **Side bar** and click the **Settings** icon

     .. class:: screenshot

		|click-settings-bitblox|

4. Click **Settings** tab and then click **3rd Party Domain** tab
 
    .. class:: screenshot

		|bitblox-click-3rd-party-domain|

		
5. In the **Domain Name** box, enter the full domain name you want to link (ex: ``mylandingpage.com``) and then click **Connect Domain** button

    .. class:: screenshot

		|click-connect-domain-bitblox|
		
6. A new panel will be opened with the records from your provider domain account. Copy the name of your page (ex: ``chitoroaganataliav-pzg27.bitblox.online``) under the **required** row


    .. class:: screenshot

		|bitblox-copy-page-name|
		
7. `Log in to your GoDaddy account <https://sso.godaddy.com/?realm=idp&app=mya&path=?ci=>`__
8. In the **Domains** section, click **Manage**

	.. class:: screenshot

		|godaddy-click-manage|
		
9. Select the domain you would like to connect and click the **Settings** icon, and select **Manage DNS**
	
	.. class:: screenshot

		|godaddy-manage-dns|
		
10. In the **Records** section, click the **Edit** Icon for the CNAME record


	.. class:: screenshot

		|godaddy-manage-cname|

11. In the **Points** to text box, enter the name of your page (ex: ``chitoroaganataliav-pzg27.bitblox.online``)
12. Click Save

	.. class:: screenshot

		|godaddy-save-cname|

13. In your BitBlox account, click **Refresh** button on the DNS Settings:

	.. class:: screenshot

		|bitblox-click-refresh-dns-settings|


14. If your records are entered correctly, the Current Data will be green


	.. class:: screenshot

		|bitblox-green|	




For more help with settings in your GoDaddy account, contact their `support team <https://uk.godaddy.com/help>`__ .







.. |edit-my-landing-page-bitblox| image:: _images/edit-my-landing-page-bitblox.jpg
.. |click-settings-bitblox| image:: _images/click-settings-bitblox.jpg
.. |bitblox-click-3rd-party-domain| image:: _images/bitblox-click-3rd-party-domain.jpg
.. |click-connect-domain-bitblox| image:: _images/click-connect-domain-bitblox.jpg
.. |bitblox-copy-page-name| image:: _images/bitblox-copy-page-name.jpg

.. |godaddy-click-manage| image:: _images/godaddy-click-manage.png
.. |godaddy-manage-dns| image:: _images/godaddy-manage-dns.png
.. |godaddy-manage-cname| image:: _images/godaddy-manage-cname.jpg
.. |bitblox-save-cname| image:: _images/bitblox-save-cname.jpg

.. |bitblox-click-refresh-dns-settings| image:: _images/bitblox-click-refresh-dns-settings.jpg
.. |bitblox-green| image:: _images/bitblox-green.jpg
