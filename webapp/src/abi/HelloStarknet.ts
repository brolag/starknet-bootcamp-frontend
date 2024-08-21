export const abi = [
  {
    "type": "impl",
    "name": "HelloStarknetImpl",
    "interface_name": "starknet_bootcamp_frontend::IHelloStarknet"
  },
  {
    "type": "interface",
    "name": "starknet_bootcamp_frontend::IHelloStarknet",
    "items": [
      {
        "type": "function",
        "name": "increase_balance",
        "inputs": [
          {
            "name": "amount",
            "type": "core::felt252"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "get_balance",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      }
    ]
  },
  {
    "type": "event",
    "name": "starknet_bootcamp_frontend::HelloStarknet::Event",
    "kind": "enum",
    "variants": []
  }
]