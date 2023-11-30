<script>
export default {
    name: 'People'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div id="masonry">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/2.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/3.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/4.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/6.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/8.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/9.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/7.jpg">
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;


div#masonry { 
  display: flex; 
  flex-direction: column; 
  flex-wrap: wrap;
  height: 100vw;
  max-height: 800px;
  font-size: 0;
  overflow-y: hidden;
}
div#masonry img {  
  width: 33.3%;
  transition: .8s opacity;
} 

div#masonry:hover img { opacity: 0.3; }
div#masonry:hover img:hover { opacity: 1; } 

/* fallback for earlier versions of Firefox */

@supports not (flex-wrap: wrap) {
  div#masonry { display: block; }
  div#masonry img {  
  display: inline-block;
  vertical-align: top;
  }
}

 

    
</style>