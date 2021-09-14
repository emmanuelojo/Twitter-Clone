<template>
  <div class="hero">
    <div class="about">
      <h1>This is a More page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        dignissimos. Esse quidem quaerat facere, animi itaque obcaecati iste non
        vitae cum soluta saepe vero nulla, repellat nemo ea ducimus. Ex.
      </p>
    </div>
  </div>
</template>
<style scoped>
.hero{
  display: grid;
}
.about h1 {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.about h3 {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.about p {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
}

@media screen and (max-width: 767px){
  .about h3{
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
