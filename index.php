<!DOCTYPE html>
<html>
    <head>
        <?php require_once('tools/generate_importmap.php'); ?>
    </head>
    <body>
        <h1>Hello World</h1>
        
        <!-- Method 1: Using module import -->
        <div id="date1"></div>
        <script type="module">
            import { formatDate } from './main.js';
            document.getElementById('date1').textContent = formatDate(new Date());
            console.log('one', formatDate(new Date()));
        </script>

        <!-- Method 2: Using proper event handler -->
        <button id="updateButton">Update Time</button>
        <div id="date2"></div>
        <script type="module">
            import { formatDate } from './main.js';
            
            document.getElementById('updateButton').addEventListener('click', () => {
                document.getElementById('date2').textContent = formatDate(new Date());
                console.log('two', formatDate(new Date()));
            });
        </script>

        <!-- Method 3: Using a module script inline -->
        <div id="date3"></div>
        <script type="module">
            import { formatDate } from './main.js';
            document.getElementById('date3').textContent = 
                formatDate(new Date());
            console.log('three', formatDate(new Date()));
        </script>
    </body>
</html>