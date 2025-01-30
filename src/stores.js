import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Most Americans expect President-elect Donald Trump to do a good job upon his return to the White House next month (54%) and a majority approves of how he’s handling the presidential transition so far (55%), according to a new CNN Poll conducted by SSRS.", 
    },
    {
        id: 2,
        rating: 9,
        text: "Chris Mudd, a Trump supporter who owns a solar energy company in Waterloo, Iowa, was both complimentary of Trump’s early moves and candid that he will likely have to bite his tongue sometimes.", 
    },
    {
        id: 3,
        rating: 8,
        text: "The letter had been a target of Republican-led congressional investigations over the past two years, but Trump’s action to revoke clearances took things a step further.", 
    } 
])