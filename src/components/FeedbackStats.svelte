<script>
    import {FeedbackStore} from "../stores"


    $: count = $FeedbackStore.length
    $: average = (() => {
        const avg = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length;
        return avg % 1 === 0 ? avg.toString() : avg.toFixed(2);
    })();

    
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>