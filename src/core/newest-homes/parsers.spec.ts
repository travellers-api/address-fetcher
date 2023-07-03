import { parseHomeSearchPage } from './parsers';

const html = `        <div class="row block-homes">
            
<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/440?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="静岡音羽町A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/5536/6000f27b-c1e7-40ca-be56-5ba288d88c58.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_440">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/440/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">静岡音羽町A邸</h3>
      <div class="homes-card__info d-flex">
        <p>静岡県</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">お庭でサウナ！自然と利便をまるごと体感するリノベ古民家</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/434?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="桜川A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/5515/7423118d-0338-4786-ae78-9e31bc21cdf6.jpeg" />
        </div>
        <div class="favorite_btn favorite_btn_434">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/434/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">桜川A邸</h3>
      <div class="homes-card__info d-flex">
        <p>茨城県</p>
        <p class="homes-card__type">ホテル/旅館</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">筑波連山の麓にある静かな佇まい、鳥の声で目覚める朝を！</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/436?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="沖縄那覇F邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/5473/32811ca5-0792-4843-ae2b-f569e41cb06b.JPG" />
        </div>
        <div class="favorite_btn favorite_btn_436">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/436/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">沖縄那覇F邸</h3>
      <div class="homes-card__info d-flex">
        <p>沖縄県</p>
        <p class="homes-card__type">その他</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">沖縄繁華街の中心地でありながら静かに過ごせる古民家</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/433?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="三ケ日A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/5493/61687ff3-ced7-44dc-9f9c-581af5816e44.JPG" />
        </div>
        <div class="favorite_btn favorite_btn_433">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/433/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">三ケ日A邸</h3>
      <div class="homes-card__info d-flex">
        <p>静岡県</p>
        <p class="homes-card__type">ホテル/旅館</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">農家がリノベーションした昔懐かしいかまどのある家</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/431?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="豊丘A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/5457/48932489-9271-4e5d-8a03-47433ea5b62a.jpeg" />
        </div>
        <div class="favorite_btn favorite_btn_431">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/431/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">豊丘A邸</h3>
      <div class="homes-card__info d-flex">
        <p>長野県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">近すぎる大自然を体感できるゲストハウス</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/417?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="筑後A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/5316/f9549621-3cdc-4262-8684-1eb573188d75.jpeg" />
        </div>
        <div class="favorite_btn favorite_btn_417">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/417/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">筑後A邸</h3>
      <div class="homes-card__info d-flex">
        <p>福岡県</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">どこか懐かしい、民藝家具を愛でるノスタルジックな家</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/404?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="対馬B邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/5027/e30b540d-f619-4c80-b3d3-805f9a9580e5.JPG" />
        </div>
        <div class="favorite_btn favorite_btn_404">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/404/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">対馬B邸</h3>
      <div class="homes-card__info d-flex">
        <p>長崎県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">学び舎にステイ！地域と交流しながら島暮らしを楽しめるお家</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/403?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="日置B邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4999/3a563ff9-8b29-4f59-81ed-e10ef9ffe307.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_403">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/403/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">日置B邸</h3>
      <div class="homes-card__info d-flex">
        <p>鹿児島県</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">漁師が創る、海と温泉を身近に暮らす家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/393?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="福井A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4949/d95916fe-721a-4750-ae77-9492146c3b1f.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_393">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/393/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">福井A邸</h3>
      <div class="homes-card__info d-flex">
        <p>福井県</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">四季を感じる福井の山々に囲まれてワーケーションができる家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/394?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="沖縄本部C邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4881/7428ae8a-b6c1-45b7-8be1-6563dd66b8b0.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_394">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/394/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">沖縄本部C邸</h3>
      <div class="homes-card__info d-flex">
        <p>沖縄県</p>
        <p class="homes-card__type">ホテル/旅館</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">沖縄のもう一つの魅力〈山原の石と木々が包む〉隠れ家ヴィラ</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/405?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="佐賀A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4859/1c7dc1f6-67a4-42cb-adf1-5a6d3a011041.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_405">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/405/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">佐賀A邸</h3>
      <div class="homes-card__info d-flex">
        <p>佐賀県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">佐賀の国際交流ゲストハウスで一期一会の出会いを</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/386?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="霧島A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4722/53f68df1-31a2-4b9e-8db9-e8b3e3001f6c.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_386">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/386/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">霧島A邸</h3>
      <div class="homes-card__info d-flex">
        <p>鹿児島県</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">鹿児島県霧島市の別荘地に佇む温泉が楽しめる家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/382?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="佐島A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4694/c026ac52-8ce3-44e7-b01a-680b8beb0b0e.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_382">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/382/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">佐島A邸</h3>
      <div class="homes-card__info d-flex">
        <p>愛媛県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">瀬戸内海に浮かぶ小さな島で、人が集まる古民家ゲストハウス</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/379?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="千倉B邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4655/e17e5de2-f5a8-40b6-a989-3ec66b7a8c7a.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_379">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/379/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">千倉B邸</h3>
      <div class="homes-card__info d-flex">
        <p>千葉県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">海岸まで徒歩30秒！昭和レトロなゲストハウス提携拠点</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/373?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="沖縄国頭村A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4540/6d946024-682b-4514-81e4-d0a02356c8a7.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_373">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/373/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">沖縄国頭村A邸</h3>
      <div class="homes-card__info d-flex">
        <p>沖縄県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">沖縄北部国頭村での暮らし、遊び、働きの拠点として</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/369?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="川越A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4397/bcdadf95-758a-49af-873a-6947656662e2.jpeg" />
        </div>
        <div class="favorite_btn favorite_btn_369">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/369/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">川越A邸</h3>
      <div class="homes-card__info d-flex">
        <p>埼玉県</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">埼玉の城下町・川越市内に位置する観光にもおすすめな家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/360?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="富士A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4317/d93b0abc-a06f-45af-9cc9-33b75b8cdf1a.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_360">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/360/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">富士A邸</h3>
      <div class="homes-card__info d-flex">
        <p>静岡県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">JR富士駅より徒歩6分！ビルを改装したゲストハウス提携の家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/363?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="東松島A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4284/9799e17e-049f-4ab1-8334-e2dc103247a5.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_363">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/363/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">東松島A邸</h3>
      <div class="homes-card__info d-flex">
        <p>宮城県</p>
        <p class="homes-card__type">シェアハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">陸海空のアクティビティを楽しめる宮城県東松島市の家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/353?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="富岡A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4203/2a27550d-ca89-4a0d-90b2-9d6d57953b03.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_353">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/353/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">富岡A邸</h3>
      <div class="homes-card__info d-flex">
        <p>福島県</p>
        <p class="homes-card__type">ホテル/旅館</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">浜通り地域の回遊拠点に、老舗ホテル提携の家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/345?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="那智勝浦A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/4065/fd441423-0ddf-4b04-9f39-aec4918c28b5.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_345">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/345/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">那智勝浦A邸</h3>
      <div class="homes-card__info d-flex">
        <p>和歌山県</p>
        <p class="homes-card__type">ホテル/旅館</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">マグロの競りで目が覚める！目の前が港のホテル提携の家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/340?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="横浜杉田A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/3969/7d656a7f-e434-44bc-af0c-5ff543ed49f0.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_340">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/340/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">横浜杉田A邸</h3>
      <div class="homes-card__info d-flex">
        <p>神奈川県</p>
        <p class="homes-card__type">シェアハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">アクセス良好。シェアハウスと提携した横浜市内第1号の家。</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/338?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="椎名町B邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/3957/9c6ef969-75c2-4464-b5d1-b2c01f629210.JPG" />
        </div>
        <div class="favorite_btn favorite_btn_338">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/338/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">椎名町B邸</h3>
      <div class="homes-card__info d-flex">
        <p>東京都</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">2駅利用可能なアクセスの良さ。漫画の聖地にある家</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/324?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="湖南A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/3720/921105a3-57c3-459d-b155-ad3f6e3f15aa.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_324">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/324/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">湖南A邸</h3>
      <div class="homes-card__info d-flex">
        <p>滋賀県</p>
        <p class="homes-card__type">シェアハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">地場に根付いた家守のシェアハウスとコワーキングで移住体験できる家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/322?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="阿字ヶ浦C邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/3689/8cb9cb88-2b2a-4794-afb5-5c2a66257601.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_322">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/322/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">阿字ヶ浦C邸</h3>
      <div class="homes-card__info d-flex">
        <p>茨城県</p>
        <p class="homes-card__type">キャンプサイト</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">海まで徒歩5分。波音が聞こえる海辺のガーデンキャンプ場</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/323?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="東伊豆A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/3693/e63f8ba1-548a-4a60-9ee8-db3af5023b2f.png" />
        </div>
        <div class="favorite_btn favorite_btn_323">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/323/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">東伊豆A邸</h3>
      <div class="homes-card__info d-flex">
        <p>静岡県</p>
        <p class="homes-card__type">キャンプサイト</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">ユネスコに世界ジオパーク認定された伊豆半島でキャンプライフを</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/317?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="大三島A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/3606/21c92fc6-17fe-49b0-8cc3-6b448c0e5329.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_317">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/317/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">大三島A邸</h3>
      <div class="homes-card__info d-flex">
        <p>愛媛県</p>
        <p class="homes-card__type">ゲストハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">しまなみ海道を満喫。カフェバル併設のゲストハウス提携の家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/305?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="沖縄恩納村A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/3316/333a805a-a3ee-437a-ac1d-8e17e3465d09.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_305">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/305/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">沖縄恩納村A邸</h3>
      <div class="homes-card__info d-flex">
        <p>沖縄県</p>
        <p class="homes-card__type">ホテル/旅館</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">沖縄屈指の天然ビーチ徒歩圏。広めの個室で同伴利用可能な家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/276?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="水戸B邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/2783/dc152fec-88d4-4e69-9052-9ef34284064f.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_276">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/276/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">水戸B邸</h3>
      <div class="homes-card__info d-flex">
        <p>茨城県</p>
        <p class="homes-card__type">シェアハウス</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">本や古材アートに触れる暮らしのできる家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/271?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="いすみB邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/2713/edf99ca7-4db2-4d15-b4eb-60a3d24e2bbb.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_271">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/271/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">いすみB邸</h3>
      <div class="homes-card__info d-flex">
        <p>千葉県</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">広々個室でのんびり過ごす、猫がいる癒しの家</p>
      </div>
</a>  </article>
</div>

<div class="homes-card-wrap">
  <article class="homes-card">
    <a class="homes-card-inner" href="/homes/265?q%5Bchild%5D=0&amp;q%5Bpreschooler%5D=0&amp;q%5Broom_count%5D=1">
      <figure class="homes-card__thumbnail">
        <div class="c_card">
            <img alt="椎名町A邸の写真" src="https://cdn.address.love/uploads/images/home_image/image/2612/6c12003a-6032-4e7c-babd-a823b7a95c56.jpg" />
        </div>
        <div class="favorite_btn favorite_btn_265">
          <object>
    <a data-remote="true" rel="nofollow" data-method="post" href="/homes/265/favorite">
      <span class="c_card-favorit">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </span>
</a></object>

        </div>
      </figure>
      <h3 class="homes-card__title">椎名町A邸</h3>
      <div class="homes-card__info d-flex">
        <p>東京都</p>
        <p class="homes-card__type">戸建て</p>
      </div>
      <div class="homes-card__body">
        <p class="homes-card__text">築50年の民家をセルフリノベした木の温もりが感じられる家</p>
      </div>
          <p class="homes-card__limited"><img class="icon-limited" src="https://cdn.address.love/packs/media/images/icon_calendar-409e3b2bf39a6656f99e939e2b0aaf65.svg" /> 予約制限あり</p>
</a>  </article>
</div>

        </div>`;

describe('parseHomeSearchPage', () => {
  test('homes', async () => {
    const homes = parseHomeSearchPage(html);
    expect(homes).toEqual([
      {
        id: 440,
        url: 'https://address.home/homes/440',
        name: '静岡音羽町A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/5536/6000f27b-c1e7-40ca-be56-5ba288d88c58.jpg',
        prefecture: '静岡県',
        homeType: '戸建て',
        reservationLimit: '予約制限あり',
      },
      {
        id: 434,
        url: 'https://address.home/homes/434',
        name: '桜川A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/5515/7423118d-0338-4786-ae78-9e31bc21cdf6.jpeg',
        prefecture: '茨城県',
        homeType: 'ホテル/旅館',
        reservationLimit: '予約制限あり',
      },
      {
        id: 436,
        url: 'https://address.home/homes/436',
        name: '沖縄那覇F邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/5473/32811ca5-0792-4843-ae2b-f569e41cb06b.JPG',
        prefecture: '沖縄県',
        homeType: 'その他',
        reservationLimit: '予約制限あり',
      },
      {
        id: 433,
        url: 'https://address.home/homes/433',
        name: '三ケ日A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/5493/61687ff3-ced7-44dc-9f9c-581af5816e44.JPG',
        prefecture: '静岡県',
        homeType: 'ホテル/旅館',
        reservationLimit: '予約制限あり',
      },
      {
        id: 431,
        url: 'https://address.home/homes/431',
        name: '豊丘A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/5457/48932489-9271-4e5d-8a03-47433ea5b62a.jpeg',
        prefecture: '長野県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限あり',
      },
      {
        id: 417,
        url: 'https://address.home/homes/417',
        name: '筑後A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/5316/f9549621-3cdc-4262-8684-1eb573188d75.jpeg',
        prefecture: '福岡県',
        homeType: '戸建て',
        reservationLimit: '予約制限あり',
      },
      {
        id: 404,
        url: 'https://address.home/homes/404',
        name: '対馬B邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/5027/e30b540d-f619-4c80-b3d3-805f9a9580e5.JPG',
        prefecture: '長崎県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限あり',
      },
      {
        id: 403,
        url: 'https://address.home/homes/403',
        name: '日置B邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4999/3a563ff9-8b29-4f59-81ed-e10ef9ffe307.jpg',
        prefecture: '鹿児島県',
        homeType: '戸建て',
        reservationLimit: '予約制限なし',
      },
      {
        id: 393,
        url: 'https://address.home/homes/393',
        name: '福井A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4949/d95916fe-721a-4750-ae77-9492146c3b1f.jpg',
        prefecture: '福井県',
        homeType: '戸建て',
        reservationLimit: '予約制限なし',
      },
      {
        id: 394,
        url: 'https://address.home/homes/394',
        name: '沖縄本部C邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4881/7428ae8a-b6c1-45b7-8be1-6563dd66b8b0.jpg',
        prefecture: '沖縄県',
        homeType: 'ホテル/旅館',
        reservationLimit: '予約制限あり',
      },
      {
        id: 405,
        url: 'https://address.home/homes/405',
        name: '佐賀A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4859/1c7dc1f6-67a4-42cb-adf1-5a6d3a011041.jpg',
        prefecture: '佐賀県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 386,
        url: 'https://address.home/homes/386',
        name: '霧島A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4722/53f68df1-31a2-4b9e-8db9-e8b3e3001f6c.jpg',
        prefecture: '鹿児島県',
        homeType: '戸建て',
        reservationLimit: '予約制限なし',
      },
      {
        id: 382,
        url: 'https://address.home/homes/382',
        name: '佐島A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4694/c026ac52-8ce3-44e7-b01a-680b8beb0b0e.jpg',
        prefecture: '愛媛県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 379,
        url: 'https://address.home/homes/379',
        name: '千倉B邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4655/e17e5de2-f5a8-40b6-a989-3ec66b7a8c7a.jpg',
        prefecture: '千葉県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 373,
        url: 'https://address.home/homes/373',
        name: '沖縄国頭村A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4540/6d946024-682b-4514-81e4-d0a02356c8a7.jpg',
        prefecture: '沖縄県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 369,
        url: 'https://address.home/homes/369',
        name: '川越A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4397/bcdadf95-758a-49af-873a-6947656662e2.jpeg',
        prefecture: '埼玉県',
        homeType: '戸建て',
        reservationLimit: '予約制限なし',
      },
      {
        id: 360,
        url: 'https://address.home/homes/360',
        name: '富士A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4317/d93b0abc-a06f-45af-9cc9-33b75b8cdf1a.jpg',
        prefecture: '静岡県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 363,
        url: 'https://address.home/homes/363',
        name: '東松島A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4284/9799e17e-049f-4ab1-8334-e2dc103247a5.jpg',
        prefecture: '宮城県',
        homeType: 'シェアハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 353,
        url: 'https://address.home/homes/353',
        name: '富岡A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4203/2a27550d-ca89-4a0d-90b2-9d6d57953b03.jpg',
        prefecture: '福島県',
        homeType: 'ホテル/旅館',
        reservationLimit: '予約制限なし',
      },
      {
        id: 345,
        url: 'https://address.home/homes/345',
        name: '那智勝浦A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/4065/fd441423-0ddf-4b04-9f39-aec4918c28b5.jpg',
        prefecture: '和歌山県',
        homeType: 'ホテル/旅館',
        reservationLimit: '予約制限なし',
      },
      {
        id: 340,
        url: 'https://address.home/homes/340',
        name: '横浜杉田A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/3969/7d656a7f-e434-44bc-af0c-5ff543ed49f0.jpg',
        prefecture: '神奈川県',
        homeType: 'シェアハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 338,
        url: 'https://address.home/homes/338',
        name: '椎名町B邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/3957/9c6ef969-75c2-4464-b5d1-b2c01f629210.JPG',
        prefecture: '東京都',
        homeType: '戸建て',
        reservationLimit: '予約制限あり',
      },
      {
        id: 324,
        url: 'https://address.home/homes/324',
        name: '湖南A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/3720/921105a3-57c3-459d-b155-ad3f6e3f15aa.jpg',
        prefecture: '滋賀県',
        homeType: 'シェアハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 322,
        url: 'https://address.home/homes/322',
        name: '阿字ヶ浦C邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/3689/8cb9cb88-2b2a-4794-afb5-5c2a66257601.jpg',
        prefecture: '茨城県',
        homeType: 'キャンプサイト',
        reservationLimit: '予約制限なし',
      },
      {
        id: 323,
        url: 'https://address.home/homes/323',
        name: '東伊豆A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/3693/e63f8ba1-548a-4a60-9ee8-db3af5023b2f.png',
        prefecture: '静岡県',
        homeType: 'キャンプサイト',
        reservationLimit: '予約制限なし',
      },
      {
        id: 317,
        url: 'https://address.home/homes/317',
        name: '大三島A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/3606/21c92fc6-17fe-49b0-8cc3-6b448c0e5329.jpg',
        prefecture: '愛媛県',
        homeType: 'ゲストハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 305,
        url: 'https://address.home/homes/305',
        name: '沖縄恩納村A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/3316/333a805a-a3ee-437a-ac1d-8e17e3465d09.jpg',
        prefecture: '沖縄県',
        homeType: 'ホテル/旅館',
        reservationLimit: '予約制限なし',
      },
      {
        id: 276,
        url: 'https://address.home/homes/276',
        name: '水戸B邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/2783/dc152fec-88d4-4e69-9052-9ef34284064f.jpg',
        prefecture: '茨城県',
        homeType: 'シェアハウス',
        reservationLimit: '予約制限なし',
      },
      {
        id: 271,
        url: 'https://address.home/homes/271',
        name: 'いすみB邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/2713/edf99ca7-4db2-4d15-b4eb-60a3d24e2bbb.jpg',
        prefecture: '千葉県',
        homeType: '戸建て',
        reservationLimit: '予約制限なし',
      },
      {
        id: 265,
        url: 'https://address.home/homes/265',
        name: '椎名町A邸',
        thumbnail:
          'https://cdn.address.love/uploads/images/home_image/image/2612/6c12003a-6032-4e7c-babd-a823b7a95c56.jpg',
        prefecture: '東京都',
        homeType: '戸建て',
        reservationLimit: '予約制限あり',
      },
    ]);
  });
});
