<script>
    import FeedbackList from './components/FeedbackList.svelte'
    let feedback = [
        {
            id: 1,
            rating: 10,
            text: "ABCDEFG", 
        },
        {
            id: 2,
            rating: 9,
            text: "ABCDEFG", 
        },
        {
            id: 3,
            rating: 8,
            text: "ABCDEFG", 
        } 
    ]
</script>

<main class="container">
    <!-- <FeedbackList feedback = {feedback} /> -->
    <FeedbackList {feedback} />

</main>
