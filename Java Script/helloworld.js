<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>

/*to put java scirpt into a separate file

<script src="/path/to/script.js"></script>

To attach several scripts, use multiple tags:

1. <script src="/js/script1.js"></script>
2. <script src="/js/script2.js"></script>


This won’t work:

<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>

The example above can be split into two scripts to work:

<script src="file.js"></script>
<script>
  alert(1);
</script>

