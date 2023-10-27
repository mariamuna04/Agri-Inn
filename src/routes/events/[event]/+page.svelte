<script lang="ts">

    import {onMount} from "svelte";

    export let data;
    const event_id = data.event_id;
    let event: any;
    let animalDetails = [{animalType: "", animalNumber: ""}];
    let maximumType = 1;

    const addAnimalField: any = () => {
        ++maximumType;
        if (maximumType > 5) {
            alert("You can only add up to 5 types of animals");
            return;
        }

        const parentElement: HTMLElement | null = document.getElementById("animalDetails");

        const HTMLString = `
            <div class="flex mb-2">
                <input type="text" name="animalType[]"
                       class="w-2/3 px-4 py-2 border rounded-l-md focus:outline-none focus:border-amber-500"
                       placeholder="Animal Type" required/>
                <input type="number" name="animalNumber[]"
                       class="w-1/3 px-4 py-2 border rounded-r-md focus:outline-none focus:border-amber-500"
                       placeholder="Number" required/>
            </div>
        `;

        if (parentElement) {
            parentElement.insertAdjacentHTML("beforeend", HTMLString);
        }

    }


    function handleSubmit() {
        // Handle form submission logic here
        console.log(animalDetails);
    }

    onMount(async () => {
        // Call API to fetch event details
        const response = await fetch('/API/v1/events/GetOneEventAPI', {
            method: 'POST',
            body: JSON.stringify(event_id),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        event = await response.json();
        console.log(event);
    });
</script>

<!--<main>-->
<!--    <form on:submit={handleSubmit} class="max-w-md mx-auto p-4 bg-white rounded shadow-md">-->
<!--        &lt;!&ndash; Animal Showcase Event Registration &ndash;&gt;-->
<!--        <h1 class="text-2xl font-bold mb-4">Animal Showcase Event Registration</h1>-->

<!--        &lt;!&ndash; Farm Information &ndash;&gt;-->
<!--        <div class="mb-4">-->
<!--            <label for="farmName" class="block text-sm font-semibold text-gray-600 mb-2">Farm's Name</label>-->
<!--            <input type="text" id="farmName" name="farmName"-->
<!--                   class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500" required/>-->
<!--        </div>-->

<!--        &lt;!&ndash; Animal Information &ndash;&gt;-->
<!--        <div class="mb-4">-->
<!--            <label for="animalDetails" class="block text-sm font-semibold text-gray-600 mb-2">Types of Animals</label>-->

<!--            <div id="animalDetails">-->
<!--                <div class="flex mb-2">-->
<!--                    <input type="text" name="animalType[]"-->
<!--                           class="w-2/3 px-4 py-2 border rounded-l-md focus:outline-none focus:border-amber-500"-->
<!--                           placeholder="Animal Type" required/>-->
<!--                    <input type="number" name="animalNumber[]"-->
<!--                           class="w-1/3 px-4 py-2 border rounded-r-md focus:outline-none focus:border-amber-500"-->
<!--                           placeholder="Number" required/>-->
<!--                </div>-->
<!--            </div>-->

<!--            <button type="button" on:click={addAnimalField}-->
<!--                    class="mt-2 px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-900 focus:outline-none transition-all duration-300">-->
<!--                Add More-->
<!--            </button>-->
<!--        </div>-->

<!--        <div class="mb-4">-->
<!--            <label for="timeslot" class="block text-sm font-semibold text-gray-600 mb-2">Preferred Timeslot</label>-->
<!--            <select id="timeslot" name="timeslot"-->
<!--                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500" required>-->
<!--                <option value="" disabled selected>Select Timeslot</option>-->
<!--                <option value="morning">Morning</option>-->
<!--                <option value="afternoon">Afternoon</option>-->
<!--                <option value="evening">Evening</option>-->
<!--                &lt;!&ndash; Add more options as needed &ndash;&gt;-->
<!--            </select>-->
<!--        </div>-->

<!--        &lt;!&ndash; Buttons &ndash;&gt;-->
<!--        <div class="flex justify-between items-center">-->

<!--            <button type="submit" name="submit"-->
<!--                    class="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-900 focus:outline-none transition-all duration-300">-->
<!--                Submit-->
<!--            </button>-->
<!--        </div>-->
<!--    </form>-->


<!--</main>-->


<main class="my-28 mx-64">
    <section class="grid grid-cols-3">
        {#if event}
            <div id="event_details" class="bg-amber-100 col-span-2">
                {event.location}
        </div>
        {:else}
            Loading...
        {/if}

        <form on:submit={handleSubmit} class="max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <!-- Animal Showcase Event Registration -->
            <h1 class="text-2xl font-bold mb-4">Animal Showcase Event Registration</h1>

            <!-- Farm Information -->
            <div class="mb-4">
                <label for="farmName" class="block text-sm font-semibold text-gray-600 mb-2">Farm's Name</label>
                <input type="text" id="farmName" name="farmName"
                       class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500" required/>
            </div>

            <!-- Animal Information -->
            <div class="mb-4">
                <label for="animalDetails" class="block text-sm font-semibold text-gray-600 mb-2">Types of
                    Animals</label>

                <div id="animalDetails">
                    <div class="flex mb-2">
                        <input type="text" name="animalType[]"
                               class="w-2/3 px-4 py-2 border rounded-l-md focus:outline-none focus:border-amber-500"
                               placeholder="Animal Type" required/>
                        <input type="number" name="animalNumber[]" min="0" max="8"
                               class="w-1/3 px-4 py-2 border rounded-r-md focus:outline-none focus:border-amber-500"
                               placeholder="Number" required/>
                    </div>
                </div>

                <button type="button" on:click={addAnimalField}
                        class="mt-2 px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-900 focus:outline-none transition-all duration-300">
                    Add More
                </button>
            </div>

            <!-- Buttons -->
            <div class="flex justify-between items-center">

                <button type="submit" name="submit"
                        class="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-900 focus:outline-none transition-all duration-300">
                    Submit
                </button>
            </div>
        </form>

    </section>

</main>