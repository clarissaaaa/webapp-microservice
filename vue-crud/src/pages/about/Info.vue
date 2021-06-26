<template>
  <Promo />
  <Header />
  <NavMain />
  <div class="header bg-light">
    <div class="container">
      <div class="card img-fluid">
        <div class="logo2">
          <div class="circle"></div>
          <img src="../../assets/icon.png" alt="bookotel-logo" />
        </div>
        <div class="info">
          <h1 class="title">Book'otel</h1>
          <h3>A personal preloved original book store by Deandra Thaddea.</h3>
        </div>
        <div class="arrow">
          <img src="../../assets/arrow.png" alt="bookotel-logo" />
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Header from "../../components/Header.vue";
import Promo from "../../components/Promo.vue";
import Footer from "../../components/Footer.vue";
import NavMain from "../../components/NavMain.vue";
export default {
  name: "About",
  components: { Header, Promo, NavMain, Footer },
};
</script>

<style scoped>
/* Card */
.header {
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-desc {
  justify-content: flex-end;
  width: 50%;
  padding: 0 0 0 50px;
}

.card {
  justify-content: flex-start;
  min-height: 70vh;
  width: 32rem;
  border-radius: 30px;
  padding: 0rem 5rem;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  background: #fff;
  border: solid black 1px;
}

.logo2 {
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo2 img {
  width: 11rem;
  z-index: 2;
  transition: all 0.75s ease-out;
}

.circle {
  width: 17rem;
  height: 17rem;
  background: #ecd5d6;
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.arrow img {
  margin-top: 5rem;
  width: 100%;
}

.info h1 {
  font-size: 3rem;
  color: #6b3034;
  text-transform: uppercase;
  text-align: center;
}

.info h3 {
  font-size: 1.3rem;
  padding: 2rem 0rem;
  color: #6b3034;
  text-align: center;
}
</style>
