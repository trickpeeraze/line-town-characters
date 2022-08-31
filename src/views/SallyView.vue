<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/sally.webp" />
    <p>
      <b>Sally</b>(サリー <i>Sarī</i>)is a female chick who is the fifth main member of LINE
      friends. She is <router-link :to="{ name: 'brown' }">Brown</router-link>'s tag-along buddy who
      also see's her as the little sister he never had.
    </p>
    <h2><span class="mw-headline" id="Appearance">Appearance</span></h2>
    <p>
      Sally has a pair of tiny black eyes, an orange beak and a body with yellow feathers. She also
      has a pair of small feet.
    </p>
    <h2><span class="mw-headline" id="Personality">Personality</span></h2>
    <p>
      Although she is naive, Sally can be quite clever sometimes. Furthermore, she is also a bit
      cunning because of the lack of attention from her friends, such as sticking close to brown
      bear because she see's him as the big brother she never.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'SallyView',
};
</script>
