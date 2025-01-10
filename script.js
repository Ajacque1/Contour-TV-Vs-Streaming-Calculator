// List of streaming service dropdown IDs
const streamingServices = [
    { id: "netflix", name: "Netflix" },
    { id: "hulu", name: "Hulu" },
    { id: "paramountPlus", name: "Paramount Plus" },
    { id: "peacock", name: "Peacock" },
    { id: "appleTV", name: "Apple TV" },
    { id: "fubo", name: "Fubo" },
    { id: "slingTV", name: "Sling TV" },
    { id: "youtubeTV", name: "Youtube TV" },
    { id: "directTV", name: "DirectTV" },
    { id: "ESPN+", name: "ESPN+" },
    { id: "starz", name: "Starz" },
];

function calculateCosts() {
    console.log("Calculating costs...");

    // Calculate total streaming cost
    const totalStreaming = streamingServices.reduce((total, service) => {
        const element = document.getElementById(service.id);
        console.log(`Processing service: ${service.name}`); // Debug each service
        if (!element) {
            console.warn(`Element with ID ${service.id} not found.`);
            return total;
        }
        const cost = parseFloat(element.value) || 0;
        console.log(`${service.name} selected value:`, cost); // Debug selected value
        return total + cost;
    }, 0);

    console.log("Total Streaming Cost:", totalStreaming); // Debug total streaming cost

    // Fetch internet and cable costs
    const internet = parseFloat(document.getElementById("internet").value) || 0;
    const cable = parseFloat(document.getElementById("cable").value) || 0;

    console.log("Internet Cost:", internet); // Debug internet cost
    console.log("Cable Cost:", cable); // Debug cable cost

    // Validate inputs
    if (totalStreaming === 0 && internet === 0 && cable === 0) {
        alert("Please select at least one streaming service, enter an internet cost, or choose a cable plan.");
        return; // Stop execution if validation fails
    }

    // Final totals
    const finalStreamingCost = totalStreaming + internet;
    const totalCable = cable;

    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <p>Total Streaming Cost: $${finalStreamingCost.toFixed(2)} / month</p>
        <p>Total Cable Cost: $${totalCable.toFixed(2)} / month</p>
        <p><strong>${finalStreamingCost < totalCable ? 'Streaming' : 'Cable'} is cheaper by $${Math.abs(finalStreamingCost - totalCable).toFixed(2)} per month.</strong></p>
    `;
}
