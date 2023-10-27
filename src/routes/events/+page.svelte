<script lang="ts">
    import {onMount} from "svelte";
    import UserCache from "$lib/stores/UserCache";
    import forum_art from "$lib/assets/images/forum-art.svg";
    import logo from "$lib/assets/icons/logo.svg";
    import forum_bg from "$lib/assets/images/forum-bg.png";
    // import PostGrid from "./PostGrid.svelte";
    // import TrendingSection from "./TrendingSection.svelte";
    import DynamicNavigation from "$lib/stores/DynamicNavigation";
    import DashboardNavigation from "$lib/components/dynamicNavigations/DashboardNavigation.svelte";
    //import * as events from "events";

    export let data;
    let events: any
    DynamicNavigation.set(DashboardNavigation);

    // let postSubmittedMessage = false;
    // let isSubmitting = false;
    //
    // let postTitle: string = "";
    // let postBody: string = "";
    // let postAuthor: string = "";
    // let profilePicture: string = "";
    // let posts: any = [];
    // let mostLikedPosts: any = [];
    //
    // export let onPostSubmit = async () => {
    //     isSubmitting = true;
    //     // Validation Check
    //     if (postTitle == "" || postBody == "") {
    //         alert("Post Title and Post Body cannot be empty");
    //         return;
    //     }
    //
    //     // Get Author
    //     UserCache.subscribe(value => {
    //         postAuthor = value.username;
    //         profilePicture = value.profile_picture;
    //     });
    //
    //     let post: Post = {
    //         title: postTitle,
    //         post: postBody,
    //         author: postAuthor,
    //         timestamp: getCurrentEpochTime(),
    //         likes: [],
    //         viewCount: 0,
    //         profilePicture: profilePicture
    //     }
    //
    //     const response = await fetch('/API/v1/forum/InsertPostAPI', {
    //         method: 'POST',
    //         body: JSON.stringify(post),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //
    //     if (response.ok) {
    //         isSubmitting = false;
    //         postSubmittedMessage = true;
    //
    //         setTimeout(()=>{
    //             postSubmittedMessage = false;
    //             postTitle = "";
    //             postBody = "";
    //         }, 3000);
    //
    //         const response = await fetch('/API/v1/forum/GetAllPostAPI');
    //         posts = await response.json();
    //         posts.sort((a:Post, b:Post) => b.timestamp - a.timestamp);
    //
    //     } else {
    //         alert("Post Submission Failed");
    //     }
    // }

    onMount(async () => {
        // Get all posts via API GetAllPostAPI
        const getAllEvents = await fetch('/API/v1/events/GetEventsAPI');
        events = await getAllEvents.json();
       // events.sort((a:Post, b:Post) => b.timestamp - a.timestamp);

        // // Get first 3 most liked posts via API GetMostLikedPostsAPI
        // const mostLikedAPIResponse = await fetch('/API/v1/forum/GetMostLikedPostsAPI');
        // mostLikedPosts = await mostLikedAPIResponse.json();
    });

    function getCurrentEpochTime(): number {
        return Math.floor(Date.now() / 1000); // Divide by 1000 to get seconds instead of milliseconds
    }


</script>
<main class="my-20 mx-32">
    {#if events === undefined}
        <div class="flex flex-col my-12 mx-24 gap-8">
            <h1>Loading...</h1>
        </div>
    {:else}
        <div class="flex flex-col my-12 mx-24 gap-8">
            {#each events as eventss}
                <p>{eventss.event_name}</p>
                <p>{eventss.event_date}</p>
                <p>{eventss.location}</p>

                <a href="/events/event"> Register Here </a>

            {/each}
        </div>
    {/if}
</main>