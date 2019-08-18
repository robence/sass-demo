## This project's aim is to give an insight how to style web-applictions more comfortably and with ease.

### Recommended Steps

#### Download repository
`git clone git@github.com:robence/sass-demo.git`

#### `npm install`
Installs dependencies

#### `npm start`
Runs the app in the development mode.<br>

### Branches
There are multiple branches on this project.  

#### the following roadmap is a key not only to understand what SCSS does, but also to catch the point why it is helpful.

#### The strategy for a better comprehension is to view each branch and compare it with the previous one to see what changes have been made. 

1. ##### styled-via-css 
This is the starting point. Application layout and style is implemented here via CSS.

2. ##### #1-variables
Scss variables were added to reduce code duplication and help maintanence of existing code.

3. ##### #2-nesting
Nested css selectors provide a better understanding of layout structure without having to view html code. Also reduces long selector tags without changing their meaning.

4. ##### #3-mixins
Mixins are identified as functions, with them code reusability is a piece of cake!

5. ##### #4-inheritance
Extending pre-defined style rules allows to describe the ui before writing any html. Buttons, fonts, colors and spacing common across components don't have to be duplicated any more. 

6. ##### #5-extras
Scss helps us finding better shades and colors via darken() and lighten() functions. Now you won't have to spend time browsing and looking for similar colors you have but with minor difference.

##### styled-via-css - previous updates were merged onto this branch and master too.
##### master - deployed version
