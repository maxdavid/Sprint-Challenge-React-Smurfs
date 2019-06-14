# Self-study Answers

1.  Explain the differences between `client-side routing` and `server-side routing`.

  In traditional `server-side routing`, a GET request for an entirely new page is made to the server every on every change of the URL. This results in a full page refresh, and the browser needs to rebuild the entire page.

  In `client-side routing`, the entire web app is sent to the user's browser when first visiting the page, and changing the URL results in displaying a different page of this app that already exists in the browser's memory. Although this means a longer initial load, there is much needed from the server afterwards.

1.  What does HTTP stand for?

  Hypertext Transfer Protocol

1.  What does CRUD stand for?

  Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

  Create: POST
  Read: GET
  Update: PUT
  Delete: DELETE

1.  Mention three tools we can use to make AJAX requests

  fetch, Axios, jQuery
