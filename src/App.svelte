<script>
    import FeedbackForm from './components/FeedbackForm.svelte'
    import FeedbackList from './components/FeedbackList.svelte'
    import FeedbackStats from './components/FeedbackStats.svelte'

    // let feedback = [
    //     {
    //         id: 1,
    //         rating: 10,
    //         text: "Most Americans expect President-elect Donald Trump to do a good job upon his return to the White House next month (54%) and a majority approves of how he’s handling the presidential transition so far (55%), according to a new CNN Poll conducted by SSRS.", 
    //     },
    //     {
    //         id: 2,
    //         rating: 9,
    //         text: "Most Americans expect President-elect Donald Trump to do a good job upon his return to the White House next month (54%) and a majority approves of how he’s handling the presidential transition so far (55%), according to a new CNN Poll conducted by SSRS.", 
    //     },
    //     {
    //         id: 3,
    //         rating: 8,
    //         text: "Most Americans expect President-elect Donald Trump to do a good job upon his return to the White House next month (54%) and a majority approves of how he’s handling the presidential transition so far (55%), according to a new CNN Poll conducted by SSRS.", 
    //     } 
    // ]


    // const addFeedback = (e) => {
    //     // console.log(e.detail)
    //     const newFeedback = e.detail
    //     feedback = [newFeedback, ...feedback]
    // }

</script>

<main class="container">
    <FeedbackForm />
    <FeedbackStats />
    <!-- <h1>{average}</h1> -->
    <!-- <h1>{count}</h1> -->
    <!-- <FeedbackList feedback = {feedback} /> -->
    <FeedbackList />

</main>
