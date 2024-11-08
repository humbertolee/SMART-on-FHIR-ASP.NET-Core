﻿using Microsoft.AspNetCore.Mvc;

namespace SMARTWebApp.Controllers
{
    public class SMARTController : Controller
    {
        public IActionResult Launch()
        {
            return View();
        }

		public IActionResult Report()
		{
			return View();
		}

		public IActionResult Callback()
        { 
            return View();
        }

        [HttpPost]
        public IActionResult Process(string jwt, string pid) 
        {
            return Ok();
        }
    }
}