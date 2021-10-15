<script>
  import { FeedbackStore } from "../stores";

  let count = $FeedbackStore.length;
  let average = $FeedbackStore.reduce((a, { rating }) => a + rating, 0) / count;
</script>

<div class="feedback-stats">
  <h4><span>{count}</span> Reviews</h4>
  <h4>Rating Average: <span>{average ? average.toFixed(1) : 0}</span></h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
  }
  h4 span {
    color: #ff6a95;
  }
</style>
