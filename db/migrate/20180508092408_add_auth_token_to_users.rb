class AddAuthTokenToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :authentication_token, :text
  end
end
