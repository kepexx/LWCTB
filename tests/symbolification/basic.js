/* WARNING: autogenerated */ module.exports = {
	"public": {
		"types": {},
		"vars": {},
		"labels": {}
	},
	"sts": [
		{
			"type": "let",
			"variable": {
				"type": "var",
				"value": {
					"location": {
						"start": {
							"offset": 8,
							"line": 1,
							"column": 9
						},
						"end": {
							"offset": 14,
							"line": 1,
							"column": 15
						}
					},
					"source": "\"test\"",
					"type": "strlit",
					"inner": {
						"raw": "test",
						"value": "test"
					},
					"raw": "test",
					"value": "test",
					"xtype": {
						"name": "str",
						"type": "builtin",
						"size": 16
					}
				},
				"register": false,
				"xtype": {
					"name": "str",
					"type": "builtin",
					"size": 16
				}
			},
			"name": "x",
			"labels": []
		},
		{
			"type": "block",
			"body": [
				{
					"type": "let",
					"variable": {
						"type": "var",
						"value": {
							"type": "access",
							"base": {
								"type": "var",
								"id": {
									"location": {
										"start": {
											"offset": 27,
											"line": 3,
											"column": 10
										},
										"end": {
											"offset": 28,
											"line": 3,
											"column": 11
										}
									},
									"source": "x",
									"type": "id",
									"value": "x"
								},
								"var": {
									"type": "var",
									"value": {
										"location": {
											"start": {
												"offset": 8,
												"line": 1,
												"column": 9
											},
											"end": {
												"offset": 14,
												"line": 1,
												"column": 15
											}
										},
										"source": "\"test\"",
										"type": "strlit",
										"inner": {
											"raw": "test",
											"value": "test"
										},
										"raw": "test",
										"value": "test",
										"xtype": {
											"name": "str",
											"type": "builtin",
											"size": 16
										}
									},
									"register": false,
									"xtype": {
										"name": "str",
										"type": "builtin",
										"size": 16
									}
								},
								"xtype": {
									"name": "str",
									"type": "builtin",
									"size": 16
								}
							},
							"list": [],
							"xtype": {
								"name": "str",
								"type": "builtin",
								"size": 16
							}
						},
						"register": false,
						"xtype": {
							"name": "str",
							"type": "builtin",
							"size": 16
						}
					},
					"name": "y",
					"labels": []
				}
			],
			"scope": {
				"types": {},
				"vars": {},
				"labels": {}
			},
			"labels": []
		}
	],
	"multi": false,
	"align": 1
}