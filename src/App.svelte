<script>
    import FeedbackList from './components/FeedbackList.svelte'
    let feedback = [
        {
            id: 1,
            rating: 10,
            text: "Most Americans expect President-elect Donald Trump to do a good job upon his return to the White House next month (54%) and a majority approves of how he’s handling the presidential transition so far (55%), according to a new CNN Poll conducted by SSRS.", 
        },
        {
            id: 2,
            rating: 9,
            text: "Most Americans expect President-elect Donald Trump to do a good job upon his return to the White House next month (54%) and a majority approves of how he’s handling the presidential transition so far (55%), according to a new CNN Poll conducted by SSRS.", 
        },
        {
            id: 3,
            rating: 8,
            text: "Most Americans expect President-elect Donald Trump to do a good job upon his return to the White House next month (54%) and a majority approves of how he’s handling the presidential transition so far (55%), according to a new CNN Poll conducted by SSRS.", 
        } 
    ]

    const deleteFeedback = (e) => {
        // console.log(e.detail)
        const itemId = e.detail
        feedback = feedback.filter((item) => item.id != itemId)
    }
</script>

<main class="container">
    <!-- <FeedbackList feedback = {feedback} /> -->
    <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />

</main>
