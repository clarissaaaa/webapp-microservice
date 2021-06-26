<template>
  <!--footer-->
  <footer>
    <div class="footer-container">
      <ul class="socials">
        <li>
          <a href="https://www.instagram.com/book.otel/" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/book.otel/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/book.otel/" target="_blank"
            ><i class="fab fa-facebook-square"></i
          ></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  height: auto;
  width: 100%;
  padding-top: 20px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.socials {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
}

.socials li {
  margin: 0 10px;
}

.socials a {
  text-decoration: none;
  color: black;
}

.socials a i {
  font-size: 35px;
  transition: color 0.4s ease;
}

.socials a:hover i {
  color: #6b3034;
}
</style>
