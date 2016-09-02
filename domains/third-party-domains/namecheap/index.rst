========
Namecheap 
========


Connecting a Namecheap domain to your BitBlox landing page
=======

If you purchased a domain from Namecheap, you can use it for your BitBlox landing page by following a process called domain mapping. In this process, you'll change a few settings in your Namecheap account to tell the domain where to point. This guide will walk you through the steps.

To follow this guide, you should already have an active domain with Namecheap. Once you connect your domain by following the steps in this guide, you must leave it registered with Namecheap to keep it connected to your BitBlox landing page.

    .. note::

        Before you begin, review our requirements for connecting a third-party domain. Daca ai unele intrebari referitor la domain poti contacta namecheap la adresa urmatoare: https://support.namecheap.com/

		
.. contents::
    :local:
    :backlinks: top

	
Step 1 - Open the Domains panel
-------

The new class inherits some usefull methods like:

* ``get_tag()`` - returns the shortcode's tag.
* ``get_declared_path($rel_path = '')`` - returns the path to where the shortcode folder was declared.
* ``get_declared_URI($rel_path = '')`` - returns the uri to where shortcode folder was declared.
* ``locate_path($rel_path = '')`` - searches a rel path given as an argument first in child theme then in parent theme and last in framework. Returns the found path or false if not found. See :ref:`overwriting <overwriting-shortcodes>` for more details.
* ``locate_URI($rel_path = '')`` - does the same as `locate_path` with uris.
* ``get_config($key = null)`` - returns the shortcode's whole :ref:`overwritten <overwriting-shortcodes>` config array, or just a particular key of it's given as an argument.
* ``get_options()`` - returns the shortcode's :ref:`overwritten <overwriting-shortcodes>` options array, if there is any.


There are three places where the shortcode files are searched until found: child theme (if active), parent theme and framework.

* ``Login`` to your BitBlox ``Account`` then click ``Edit Site``.

.. class:: screenshot

    |edit-landing-page|
	

* Open **Page Panel**.

.. image:: image/PagePanel.png


Step 2 - Link your domain
------

* In the project overlay, click on **Settings** Tab, then click **3rd Part Domain**

.. image:: image/open3rdpartdom.png

* Enter the full custom domain name you’re linking in the Domain Name box, and then click **Connect Domain**.

.. image:: image/enter_domain.png

* The DNS panel will open with the records you need to enter in your Namecheap account so your domain connects to BitBlox. Keep this panel open for your reference.

.. image:: image/dns_settings.png


Step 3 - Log into Namecheap
------

* Go to www.namecheap.com and log into your account. Click **Manage** next to your domain name.

.. image:: image/manage_dns.png

* On the domain **Details** page, click **Advanced DNS**

.. image:: image/dns_panel.ong


Step 4 - Add A Records
------

* Click **Add new Record** 
* Select **A Record** from the drop-menu
* Enter @ in the **Host** text box, and BitBlox's IP  162.243.77.151  in the ** IP Address** text box
* Click **Save all changes** 

image:: image/ip_to_namecheap.png   (aici trebuie de schimbat imaginea)


Step 5 - Add CNAME
------

* In the **type** column, use the drop-dowmn menu to select **CNAME Record**
* Enter your landing project name in the **Target** text box
* Click **Save all changes**

.. image:: image/cname.png


Step 6 - Refresh
------

After changing your records, return to the BitBlox Domains panel, click **Refresh** below the records.

The **Current Data** column in the panel will start to update and if your records are entered correctly, it will change the color into green 


.. image:: image/green_ip.png


After you've claimed your domain, it can take up to 48 hours for changes to take effect
Troubleshoot with the DNS record checker

After propagation open BitBlox editor and make the domain primary: 

.. image/primar_domain.png


Getting more help
------


.. |edit-landing-page| image:: ./_images/namecheap/edit-landing-page.jpg



