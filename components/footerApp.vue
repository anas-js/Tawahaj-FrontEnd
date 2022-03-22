<template>
  <footer class="footer">
    <topWaves />
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <div class="text" data-aos="fade-left"
      data-aos-duration="3000"
      data-aos-once="true">
              <img class="logo" src="/image/logo.svg" />
              <p>توهج و أبرز محتواك.</p>
              <p>جميع الحقوق محفوظة. © {{ new Date().getFullYear() }}</p>
            </div>
          </div>
          <div class="col-lg-7 col-md-6 links">
            <div class="container">
              <div class="row d-flex justify-content-lg-end">
                <div class="col-lg-3 col-md-3 col-sm-3" data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="true">
                  <h5>روابط رئيسية</h5>
                  <ul>
                    <li>
                      <nuxt-link to="/">الرئيسية</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">من نحن</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">صناع المحتوى</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">الأعضاء</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">المساهمون</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3" data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true">
                  <h5>المستخدم</h5>
                  <ul>
                    <li>
                      <nuxt-link to="/">تسجيل الدخول</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">إنشاء حساب</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 " data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-once="true">
                  <h5>مهم</h5>
                  <ul>
                    <li>
                      <nuxt-link to="/">الاسلئة الشائعة</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">نواصل معنا</nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3" data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true">
                  <h5>قانوني</h5>
                  <ul>
                    <li>
                      <nuxt-link to="/">الشروط و الأحكام</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">سياسة الخصوصية</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
