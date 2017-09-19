using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular2ProjectDemo.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Demo()
        {
            return View();
        }
        public ActionResult HeroComponent()
        {
            return View();
        }
        public ActionResult HeroDetail()
        {
            return View();
        }

        public ActionResult GetHeroes()
        {
            var list = new List<Hero>();
            list.Add(new Hero
            {
                id = 1,
                name = "Ganesh"
            });
            list.Add(new Hero
            {
                id = 2,
                name = "Asthosh"
            });

            list.Add(new Hero
            {
                id = 2,
                name = "Ram"
            });

            return Json(new { data = list }, JsonRequestBehavior.AllowGet);
        }
        [HttpDelete]
        public JsonResult Delete(int id)
        {
            return Json(null);
        }

        public class Hero
        {
            public int id { get; set; }
            public string name { get; set; }

        }
    }
}