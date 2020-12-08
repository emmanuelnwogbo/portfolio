<div
      class="homejumbotron homejumbotron__desktop"
      v-bind:class="{
        notshown: !loaded,
      }"
    >
      <div
        class="blurredcards"
        v-if="blurredCardLeft.length > 1"
        v-bind:style="{
          transform: `translateX(-9rem)`,
        }"
      >
        <figure class="blurredcards__photo">
          <img
            :src="blurredCardLeft[blurredCardLeft.length - 2].photo"
            alt=""
          />
        </figure>
      </div>
      <BlurredCardsLeft
        v-for="(item, index) in blurredCardLeft"
        :key="'blurredcardsleft' + index"
        v-bind:section="item"
        v-bind:translates="translates"
        v-bind:currentSection="current_section"
        v-bind:click_current="click_current"
      />
      <Intro v-bind:currentSection="current_section" />
      <div
        class="homejumbotron__labels"
        v-for="(item, index) in sections"
        :key="'homejumbotronlabels' + index"
        v-bind:class="{
          isActive: item.id === current_section,
          isNotActive: item.id !== current_section,
        }"
      >
        <h2 class="homejumbotron__labels--h2">{{ item.name }}</h2>
        <button class="homejumbotron__labels--btn" @click="view">browse</button>
      </div>
      <div class="homejumbotron__homecards">
        <HomeCard
          v-for="(item, index) in sections"
          :key="'homecard' + index"
          v-bind:section="item"
          v-bind:currentSection="current_section"
        />
        <div class="homejumbotron__static">
          <figure class="homejumbotron__static--photo">
            <img
              :src="item.photo"
              alt=""
              v-for="(item, index) in sections"
              :key="'staticimg' + index"
              v-bind:class="{
                isActive: item.id === current_section,
              }"
            />
          </figure>
        </div>
      </div>
      <BlurredCards
        v-for="(item, index) in blurredCardData"
        :key="'blurredcards' + index"
        v-bind:section="item"
        v-bind:translates="translates"
        v-bind:currentSection="current_section"
        v-bind:position="index"
        v-bind:lengthOfBlurred="blurredCardData.length"
        v-bind:click_current="click_current"
      />
      <div class="homejumbotron__btn">
        <span @click="toggle_section('left')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
        <span @click="toggle_section('right')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
      </div>
    </div>

    <div class="homejumbotron homejumbotron__mobile" id="homejumbotron__mobile">
      <MobileIntro
        v-bind:mobileIntro="mobileIntro"
        v-bind:viewportfolio="viewportfolio"
      />
      <div class="homejumbotron__mobile--portfolio">
        <MobileSlidePhoto
          v-for="(item, index) in sections"
          :key="'mobileslidephoto' + index"
          v-bind:section="item"
          v-bind:currentSection="current_section"
          v-bind:mobileIntro="mobileIntro"
        />
        <StaticPhoto
          v-bind:sections="sections"
          v-bind:currentSection="current_section"
          v-bind:mobileIntro="mobileIntro"
        />
      </div>
      <div class="homejumbotron__btn">
        <span @click="toggle_section('left')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
        <span @click="toggle_section('right')">
          <svg class="homejumbotron__svg">
            <use xlink:href="~assets/sprite.svg#icon-play_arrow" />
          </svg>
        </span>
      </div>
      <div
        class="homejumbotron__labels"
        v-for="(item, index) in sections"
        :key="'homejumbotronlabels' + index"
        v-bind:class="{
          isActive: item.id === current_section,
          isNotActive: item.id !== current_section,
        }"
      >
        <h2 class="homejumbotron__labels--h2">{{ item.name }}</h2>
        <button class="homejumbotron__labels--btn" @click="view">browse</button>
      </div>
    </div>