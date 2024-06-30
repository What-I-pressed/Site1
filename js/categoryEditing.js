// Create a new instance of XMLHttpRequest
var xhr = new XMLHttpRequest();

// The ID of the category to update
var categoryId = 21; // Replace with the actual category ID you want to update

// Configure it: PUT-request for the URL /api/categories/:id
xhr.open('PUT', 'http://example.com/api/categories/' + categoryId, true);

// Set the request headers
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Authorization', 'Bearer YOUR_ACCESS_TOKEN'); // If authorization is needed

// Define a callback function to handle the response
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            // Successfully updated
            console.log('Category updated successfully:', xhr.responseText);
        } else {
            // Handle errors
            console.error('Error updating category:', xhr.status, xhr.statusText);
        }
    }
};

// Create the data object with the updated category information
var updatedCategory = {
    name: 'Updated Пес', // Replace with the new category name
    description: 'Updated description', // Replace with the new description
    imagePath: 'new-image-path.webp' // Replace with the new image path
    // Add other fields that need to be updated if necessary
};

// Send the request with the updated category object serialized as a JSON string
xhr.send(JSON.stringify(updatedCategory));