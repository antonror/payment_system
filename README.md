# Payment System Task

## Getting Started

Dependencies:

- Rails 6 (Framework)
- Postgres (For Database)
- Node (For Webpacker / Rails Dependencies)
- React Redux

From the root of the project directory - simply run:

`rails db:create && rails db:migrate`
`bundle install`
`yarn install`

Once that runs you should be able to run the following 3 commands in separate terminal tabs:

1.  `rails s` - this will start the rails server locally.
2.  `bin/webpack-dev-server` - this will start to watch and recompile the JavaScripts found in `app/javascript`
3. `bundle exec sidekiq` for the workers/jobs

## OR Simply run this command

  1. `foreman s -f Procfile.dev` (All three command run inside Procfile.dev)

`There is a csv file in lib/task for testing purpose!`

## Technical requirements

1. Use the latest stable Rails version **done**
2. Use Slim view engine **done**
3. Frontend Framework
 - used React JS **done**
 - used Bootstrap **done**
4. Cover all changes with Rspec tests **done**
5. Add integration tests using Capybara, Nightwatch.js, Cypress, Puppeteer, Protractor or similar **pending**
6. Create factories with FactoryBot **done**
7. Apply Rubocop and other linters **done**
8. For Rails models, try to use:
  - Single Table Inheritance (STI) **done**
  - Polymorphic associations  **done**
  - Scopes **done**
  - Validations and custom validator object, if necessary **done**
  - Factory pattern **done**
  - Demonstrate meta-programming by generating/defining similar predicate methods **done**
  - Encapsulate some logic in a module's class methods private section **done**
9. For Rails controllers, try to:
  - Keep them 'thin' **done**
  - Encapsulate business logic in:
    - service objects (1) **done**
    - use cases (2) ** chosen service object**
    - or similar operations (3) ** chosen service object**
    - Interactors (4) ** chosen service object**
10. Presentation:
  - Use partials **done with React App**
  - Define Presenters (View models, Form objects (5)) **done with React App**
11. Try to showcase background and cron jobs **done**

### ☐ Relations

  - Ensure you have merchant and admin user roles (UI) **done**
  - Merchants have many payment transactions of different types **done**
  - Transactions are related (belongs_to) **done**
  - You can also have follow/referenced transactions that refer/depend to/on the initial transaction
    - Authorize Transaction -> Charge Transaction -> Refund Transaction **done**
    - Authorize Transaction -> Reversal Transaction **done**
    - Only approved or refunded transactions can be referenced, otherwise the submitted transaction will be created with status error
    - Ensure you prevent a merchant from being deleted unless there are no related payment transactions **done**

### ☐ Models

  - Merchant: name, description, email, status (active, inactive), total_transaction_sum
  - Transaction: uuid, amount, status (approved, reversed, refunded, error), customer_email, customer_phone
  - Use validations for: uuid, amount > 0, customer_email, status
  - Use STI
  - Transaction Types
    - Authorize transaction - has amount and used to hold customer's amount **done**
    - Charge transaction - has amount and used to confirm the amount is taken from the customer's account and transferred to the merchant. The merchant's total transactions amount has to be the sum of the approved Charge transactions **done**
    - Refund transaction - has amount and used to reverse a specific amount (whole amount) of the Charge Transaction and return it to the customer. Transitions the Charge transaction to status refunded. The approved Refund transactions will decrease the merchant's total transaction amount **done**
    - Reversal transaction - has no amount, used to invalidate the Authorize Transaction **done**
    - Transitions the Authorize transaction to status reversed **done**

### ☐ Inputs and tasks

  - Imports new merchants and admins from CSV (rake task) **done**
  - A background Job for deleting transactions older than an hour (cron job) **done**
  - Accepts payments using XML/ JSON API (single point POST request) **done**
  - Include API authentication layer (Basic authentication, Token-based authentication or JWT tokens) **done**
  - No transactions can be submitted unless the merchant is in active state **done**

### ☐ Presentation

  - Display, edit, destroy merchants **done**
  - Display transactions **done**
