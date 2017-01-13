var mustang = {
    engine: '5.0L V8',
    horsepower: 520,
    torque: 437,
    supercharged: true,
    turbocharged: false
};



for(var spec in mustang) {
  console.log(spec + ": " + mustang[spec]);
}
## Let's Make Sure We Understand

1. What is jQuery? //builds on top of JS, bells and whistles

2. How do we put jQuery into our project? //above JS file

3. How do we select an HTML element by its id using jQuery? //use $('#nameofid')

4. How do we tell the browser to listen for clicks on an element? //onClick is plain JS, in JQ declare var and $var.click function

5. Why de we save jQuery selections into a JavaScript variable? //faster more efficient, uses less memory

6. Why do we put a dollar at the beginning of some variable names? //easier for coder to recognize it as JQ

7. If you want to use a plain JavaScript method on a jQuery object,
   what do you need to do? //$button.getBoundingClientRect() will not work, but $button[0].getBoundingClientRect()

8. What is the range of numbers that Math.random() returns?// 0 - 0.999999

9. Using Math.random(), how can we get a random number between 1 and 20? //var num = Math.floor(Math.random() * 20) + 1)  floor always rounds down 1.99999. Math.ceil always rounds up 1.000001, Math.round goes up or down to nearest whole

10. Which jQuery method allows me to change an HTML's attribute? //if orange, it's an attribute. never put attributes in a closing tag. $button.attr('firstparamater', 'secondparameter')

11. Using jQuery, how would I change the src atribute on an img element with
    an id of "profile"? //var $profile = $('#profile');
    $profile.attr('src', )

12. What does the setTimeout function do? //2, takes 2 parameters, delays the function for given amount of time.

13. Using jQuery, how would I change the text inside of a p with and id of
    "subtitle"? //call the element. $

14. Inside a function, what keyword quits the function, thus ignoring all
    the code below this keyword? //return. using return false is most common to get it to quit

15. What type of loop do we use to iterate through an object? for(var propertyName in object) {
  console.log(propertyName);
  console.log(object)
}

16. Write a loop that iterates through the properties in the following object
    and prints each property and value to the console:
   ```JavaScript
    var mustang = {
        engine: '5.0L V8'
        horsepower: 520,
        torque: 437,
        supercharged: true,
        turbocharged: false
    };
    ```
17. Which JavaScript method gets the position of an element? //$tile[0].getBoundingClientRect();

18. What is the main difference between function declarations and function
    expressions? // the equals sign with var. declarations always get hoisted, expressions do not

19. How do we add a class to an element using jQuery? How do we remove a class? //addClass

20. What is "chaining" in JavaScript? //$hillary.css({color: 'red'}).removeClass('winner')
puts 2 different pieces of code on the same line to save space
