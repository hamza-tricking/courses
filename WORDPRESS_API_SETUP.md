# WordPress/WooCommerce API Setup

To connect your store-books page to your WordPress WooCommerce API, you need to configure the following environment variables in your `.env.local` file:

## Environment Variables

Create or update your `.env.local` file with the following variables:

```env
NEXT_PUBLIC_WC_CONSUMER_KEY=ck_61e3c3bf7c9fd06777541813f9631484d89c0e81
NEXT_PUBLIC_WC_CONSUMER_SECRET=cs_9ff168dbfadb28e5a531d1e952f442b0981806b7
NEXT_PUBLIC_WOOCOMMERCE_URL=https://your-wordpress-site.com
```

## How to Get WooCommerce API Keys

1. Log in to your WordPress admin dashboard
2. Go to **WooCommerce** → **Settings** → **Advanced** → **REST API**
3. Click **Add key** to create a new API key
4. Fill in the form:
   - **Description**: Enter a description (e.g., "Courses Website API")
   - **User**: Select the user who will have access
   - **Permissions**: Choose **Read/Write** if you need full access, or **Read only** if you just need to fetch products
5. Click **Generate API key**
6. Copy the **Consumer Key** and **Consumer Secret** and add them to your `.env.local` file

## Important Notes

- Replace `https://your-wordpress-site.com` with your actual WordPress site URL
- The `.env.local` file should be in the root directory of your project
- Make sure your `.env.local` file is added to `.gitignore` to keep your credentials secure
- After updating the `.env.local` file, restart your Next.js development server

## Testing the API Connection

Once you've configured the environment variables, the store-books page will automatically:
1. Try to fetch products from your WooCommerce API
2. If the API is not available or credentials are missing, it will fall back to mock data
3. Display an appropriate message in the console

## Troubleshooting

If you encounter issues:

1. **Check your WordPress site URL** - Ensure `NEXT_PUBLIC_WOOCOMMERCE_URL` points to the correct site
2. **Verify API credentials** - Make sure the consumer key and secret are correct
3. **Check WooCommerce REST API** - Ensure the REST API is enabled in WooCommerce settings
4. **CORS issues** - If you're getting CORS errors, you may need to configure CORS headers on your WordPress site

## Mock Data

When the WordPress API is not configured, the page will display sample book data to demonstrate the layout and functionality. This allows you to see how the page looks even without a live API connection.
