FactorBot.define do
  factory :message do
    content {Fack::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/test_image.jpg")}
    user
    group
  end
end