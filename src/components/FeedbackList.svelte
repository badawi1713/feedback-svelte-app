<script>
  // import { onMount, onDestroy } from "svelte";
  import { fade,scale } from "svelte/transition";
  import { FeedbackStore } from "../stores";
  import Card from "./Card.svelte";
  import FeedbackItem from "./FeedbackItem.svelte";
  // let feedback = [];

  // const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

  // onMount(() => {
  //   console.log("mounted");
  // });

  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

{#if $FeedbackStore.length === 0}
  <div in:scale out:fade={{ duration: 500 }}>
    <Card>
      <h2>Sorry, no feedback yet!</h2>
    </Card>
  </div>
{:else}
  {#each $FeedbackStore as item (item.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <FeedbackItem {item} />
    </div>
  {/each}
{/if}
