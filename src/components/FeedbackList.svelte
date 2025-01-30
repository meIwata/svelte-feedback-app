<script>
  // import {onMount, onDestroy} from "svelte"
  import {FeedbackStore} from "../stores"
  import { fade, scale } from "svelte/transition"
  import FeedbackItem from "./FeedbackItem.svelte";

  // 方法一
  // let feedback = []
  //   // console.log(feedback)

  // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

  // onMount(()=>{
  //   console.log("mounted")
  // })

  // onDestroy(()=>{
  //   unsubscribe()
  // })
</script>


{#each $FeedbackStore as fb (fb.id)} <!-- 方法二: 加上$FeedbackStore -->
    <!-- <h3>{fb.text}</h3>     -->

     <!-- <div transition:fade> -->
     <div in:scale out:fade="{{duration: 500}}">
      <FeedbackItem item={fb} />
     </div>
{/each}