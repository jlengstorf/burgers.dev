<template>
  <div>
    <header>
      <h1>The Contenders</h1>
      <p>Currently showing bios written by:</p>
      <form>
        <label :class="currentWriter === 'jason' && 'active'">
          <input
            type="radio"
            name="writer"
            :checked="currentWriter === 'jason'"
            @change="toggleWriter"
          />
          Jason
        </label>
        <label :class="currentWriter === 'sarah' && 'active'">
          <input
            type="radio"
            name="writer"
            :checked="currentWriter === 'sarah'"
            @change="toggleWriter"
          />
          Sarah
        </label>
      </form>
    </header>
    <section class="contenders">
      <div class="contender">
        <img :src="details.sarah.image" :alt="details.sarah.imageAlt" />
        <h2>Sarah Drasner</h2>
        <p>
          {{ details.sarah.bio }}
        </p>
      </div>
      <div class="contender">
        <img :src="details.jason.image" :alt="details.jason.imageAlt" />
        <h2>Jason Lengstorf</h2>
        <p>
          {{ details.jason.bio }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'page',
  data() {
    const details = {
      jason: {
        jason: {
          bio: `
            Jason Lengstorf knows the best burgers are honest.
            Simple ingredients, classic flavors, and no bullshit.
          `,
          image: '/images/jason-by-jason.jpg',
          imageAlt:
            'Jason Lengstorf with an apron and a winning smile. A speech bubble for him says, “I eat burgers for breakfast. Literally.”',
        },
        sarah: {
          bio: `
            Sarah Drasner believes (incorrectly) that burgers
            taste better when you do weird shit to them.
          `,
          image: '/images/sarah-by-jason.jpg',
          imageAlt:
            'Sarah Drasner holding her hand up with fingers close together signifying something small. A speech bubble for her says, “This is how big my chances of winning are.”',
        },
      },
      sarah: {
        jason: {
          bio: `
            Jason Lengstorf is a smooshy boi.
          `,
          image: '/images/jason-by-sarah.jpg',
          imageAlt:
            'Jason Lengstorf with an apron and a winning smile. A speech bubble for him says, “I eat burgers for breakfast. Literally.”',
        },
        sarah: {
          bio: `
            Sarah Drasner knows the power of the meat bath.
          `,
          image: '/images/sarah-by-sarah.jpg',
          imageAlt:
            'Sarah Drasner holding her hand up with fingers close together signifying something small. A speech bubble for her says, “This is how big my chances of winning are.”',
        },
      },
    };

    const defaultCurrentWriter = 'jason';

    return {
      currentWriter: 'jason',
      details: details[defaultCurrentWriter],
      allDetails: details,
    };
  },
  methods: {
    toggleWriter() {
      this.currentWriter = this.currentWriter === 'jason' ? 'sarah' : 'jason';
      this.details = this.allDetails[this.currentWriter];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

h1 {
  font-size: clamp(2.25rem, 15vw, 4rem);
}

form {
  display: block;
  margin-top: 0.25rem;
}

label {
  border-radius: 0.5rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: 900;
  line-height: 1;
  margin: 0 0.5rem;
  padding: 0.25rem 0.75rem 0.125rem;
  text-decoration: none;
  text-transform: uppercase;
}

label.active {
  background: #ffb905;
  border: 4px solid #ecab05;
  color: #422002;
}

input[type='radio'] {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.contenders {
  margin-top: 3rem;
}

.contender {
  margin-top: 2rem;
}

.contender h2 {
  font-size: clamp(1.75rem, 10vw, 3rem);
  text-align: center;
}

@media screen and (min-width: 550px) {
  .contenders {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
  }

  .contender {
    margin-top: 0;
  }

  .contender img {
    display: block;
    margin: 0 auto;
  }

  .contender h2 {
    font-size: clamp(1.75rem, 6vw, 2.125rem);
    text-align: center;
  }
}

.contender img {
  width: 100%;
}
</style>
