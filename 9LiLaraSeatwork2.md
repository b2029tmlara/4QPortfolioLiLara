# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.
**The entirety of the .sidebar <div> changed locations (i.e. positioning) upon updating. The relative propertyValue essentially "tells" the div and its contents to position itself according to the px values you tell it relative to it previous positioning.**

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?
** The footer has been fixed to exactly that area in the webpage, causing it to stay that way even when the viewer scrolls down. The other elements are utliizing relative positoning and are placed some px values relative from each other. **
  
### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?
**  Upon use of absolute positioning, the element is removed from the document flow and places it relative to the nearest ancestor with a positioning context (relative, absolute, or fixed). Similarly, fixed positioning removes the element from the flow *but* positions it relative to the viewport. It remains in place even when the viewer scrolls on the page. 
 **
  
### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?
** The Notice! appears on top of the content s its z index is greater than that of content's. When their z-indexes are switched, content box now covers the Notice! container.  **
  
- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * I can observe that their positions now get fixed to a specific area relative to the viewport in the page when using fixed, whereas in relative positioning, it was placed differently, much closer to the other elements, and to its original static position.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
Static is the default position of an element and does not accept properties like top, left, right, or bottom. Relative positioning on the other hand, places an element relative to its normal position. You can move it using top, left, right, or bottom.
Aside from these, Absolute positioning removes the element from the document flow and places it relative to the nearest ancestor with a positioning context (relative, absolute, or fixed). Finally, Fixed positioning removes the element from the flow and positions it relative to the viewport. It remains in place even when the page scrolls.

    b. How does absolute positioning depend on its parent element?

    c. How do you differentiate sticky from fixed (you can research on sticky)?
The sticky property essentially "sticks" a container on the screen and prevents the viewer from scrolling away from it, following wherever the viewer scrolls to. Conversely, the fixed position simply fixes all the points of a given container into one specified area within the webpage specified by their px values or others. 

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

