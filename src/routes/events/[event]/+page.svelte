<script lang="ts">
    function addAnimalField() {
        const animalDetailsContainer = document.getElementById("animalDetails");

        const newAnimalField = document.createElement("div");
        newAnimalField.classList.add("flex", "mb-2");

        const animalTypeInput = document.createElement("input");
        animalTypeInput.type = "text";
        animalTypeInput.name = "animalType[]";
        animalTypeInput.placeholder = "Animal Type";
        animalTypeInput.classList.add("w-2/3", "px-4", "py-2", "border", "rounded-l-md", "focus:outline-none", "focus:border-amber-500");
        animalTypeInput.required = true;

        const animalNumberInput = document.createElement("input");
        animalNumberInput.type = "number";
        animalNumberInput.name = "animalNumber[]";
        animalNumberInput.placeholder = "Number";
        animalNumberInput.classList.add("w-1/3", "px-4", "py-2", "border", "rounded-r-md", "focus:outline-none", "focus:border-amber-500");
        animalNumberInput.required = true;

        newAnimalField.appendChild(animalTypeInput);
        newAnimalField.appendChild(animalNumberInput);

        //animalDetailsContainer.appendChild(newAnimalField);
    }

    let animalDetails = [{animalType: "", animalNumber: ""}];

    const addAnimalField: any = () => {
        animalDetails = [...animalDetails, {animalType: "", animalNumber: ""}];
    }

    //     function removeAnimalField(index) {
    //     animalDetails = animalDetails.filter((_, i) => i !== index);
    // }

    function handleSubmit() {
        // Handle form submission logic here
        console.log(animalDetails);
    }


    // const handleSubmit = async () => {
    //         // Send credentials to server and await response
    //         const response = await fetch('/API/v1/auth/SignInAPI', {
    //             method: 'POST',
    //             //body: JSON.stringify(credentials),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //     }
</script>

<main>
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
            <label for="animalDetails" class="block text-sm font-semibold text-gray-600 mb-2">Types of Animals</label>

            <div id="animalDetails">
                <div class="flex mb-2">
                    <input type="text" name="animalType[]"
                           class="w-2/3 px-4 py-2 border rounded-l-md focus:outline-none focus:border-amber-500"
                           placeholder="Animal Type" required/>
                    <input type="number" name="animalNumber[]"
                           class="w-1/3 px-4 py-2 border rounded-r-md focus:outline-none focus:border-amber-500"
                           placeholder="Number" required/>
                </div>
            </div>

            <button type="button" on:click={addAnimalField}
                    class="mt-2 px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-900 focus:outline-none transition-all duration-300">
                Add More
            </button>
        </div>

        <div class="mb-4">
            <label for="timeslot" class="block text-sm font-semibold text-gray-600 mb-2">Preferred Timeslot</label>
            <select id="timeslot" name="timeslot"
                    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-amber-500" required>
                <option value="" disabled selected>Select Timeslot</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <!-- Add more options as needed -->
            </select>
        </div>

        <!-- Buttons -->
        <div class="flex justify-between items-center">
            <!--        <button type="button" onclick={() => { pageChange&#45;&#45;; }} class="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-900 focus:outline-none transition-all duration-300">-->
            <!--            Back-->
            <!--        </button>-->

            <button type="submit" name="submit"
                    class="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-900 focus:outline-none transition-all duration-300">
                Submit
            </button>
        </div>
    </form>


</main>